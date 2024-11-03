import random
from flask import Flask, jsonify, request
from endpoints.ListaFilmes import listafilmes
from endpoints.DetalhesFilmes import detalhesfilme
from endpoints.Filtrada import filtrada
from knn.TratarDados import recomendarfilmes

app = Flask(__name__)


# declara o endpoint como um Get com a url /filmes/<int:pagina>
@app.get("/filmes/<int:pagina>")
def filmes(pagina):
    # retorna o request com um json com a lista de filmes naquela página
    # os filmes estão ordenados por popularidade
    return jsonify(listafilmes(pagina))


@app.get("/detalhes/<int:id>")
def detalhes(id):
    return jsonify(detalhesfilme(id))



@app.get("/aleatorio")
def aleatorio():
    while True:
        try:
            id = random.randint(2, 824845)
            dados = detalhesfilme(id)
            if dados['poster'] is not None: #and (dados['sinopse'] != ""):
                return jsonify(dados)
        except Exception as e:
            print(f"Erro ao buscar dados para o ID {id}: {e}")
            continue



#IMPORTANTE: O FRONTEND DEVE REGISTRAR O DETALHES<ID> DOS FILMES PREFERIDOS NO MOMENTO QUE SÃO SELECIONADOS
#E ENVIAR UM ARRAY DE DICIONÁRIOS PARA O ENDPOINT /RECOMENDAÇÃO
#ISSO EVITA QUE A CHAVE DE API FIQUE SOBRECARREGADA E A APLICAÇÃO LENTA

@app.post("/recomendacao")
def recomendacao():
    return recomendarfilmes(request.json)

@app.post("/recomendacaofiltrada")
def recomendacaofiltrada():
    while True:
        try:
            id = filtrada(request.json)
        except Exception as e:
            print(f"Erro: {e}")
            continue
        return jsonify(detalhesfilme(id))


if __name__ == '__main__':
    app.run()
