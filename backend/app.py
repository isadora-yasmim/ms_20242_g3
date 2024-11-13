import random
import sys

from flask import Flask, jsonify, request
from endpoints.ListaFilmes import listafilmes
from endpoints.DetalhesFilmes import detalhesfilme
from endpoints.Filtrada import filtrada
from endpoints.QueryBusca import busca
from knn.TratarDados import recomendarfilmes

app = Flask(__name__)


# declara o endpoint como um Get com a url /filmes/<int:pagina>
@app.get("/filmes/<int:pagina>")
def filmes(pagina):
    # retorna o request com um json com a lista de filmes naquela página
    # os filmes estão ordenados por popularidade
    response = jsonify(listafilmes(pagina))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.post("/search/<int:pagina>")
def search(pagina):
    params = request.get_json(force=True)
    print(request.data, file=sys.stderr)
    response = jsonify(busca(params, pagina))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response






@app.get("/detalhes/<int:id>")
def detalhes(id):
    response = jsonify(detalhesfilme(id))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.get("/aleatorio")
def aleatorio():
    while True:
        try:
            id = random.randint(2, 824845)
            dados = detalhesfilme(id)
            if dados['poster'] is not None:  #and (dados['sinopse'] != ""):
                response = jsonify(dados)
                response.headers.add('Access-Control-Allow-Origin', '*')
                return response
        except Exception as e:
            print(f"Erro ao buscar dados para o ID {id}: {e}")
            continue


#IMPORTANTE: O FRONTEND DEVE REGISTRAR O DETALHES<ID> DOS FILMES PREFERIDOS NO MOMENTO QUE SÃO SELECIONADOS
#E ENVIAR UM ARRAY DE DICIONÁRIOS PARA O ENDPOINT /RECOMENDAÇÃO
#ISSO EVITA QUE A CHAVE DE API FIQUE SOBRECARREGADA E A APLICAÇÃO LENTA

@app.post("/recomendacao")
def recomendacao():

    response = recomendarfilmes(request.json)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.post("/recomendacaofiltrada")
def recomendacaofiltrada():

    params = request.get_json(force=True)
    print(request.data, file=sys.stderr)
    idfilme = filtrada(params)
    response = jsonify(detalhesfilme(idfilme))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == '__main__':
    app.run(debug=True)


