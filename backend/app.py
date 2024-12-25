import random
import sys

from flask import Flask, jsonify, request
from flask_cors import CORS
from endpoints.ListaFilmes import listafilmes
from endpoints.DetalhesFilmes import detalhesfilme
from endpoints.Filtrada import filtrada
from endpoints.QueryBusca import busca
from knn.TratarDados import recomendarfilmes

app = Flask(__name__)
CORS(app)  # Configura o CORS para permitir qualquer origem por padrão


@app.get("/filmes/<int:pagina>")
def filmes(pagina):
    response = jsonify(listafilmes(pagina))
    return response

@app.post("/search/<int:pagina>")
def search(pagina):
    params = request.get_json(force=True)
    print(request.data, file=sys.stderr)
    response = jsonify(busca(params, pagina))
    return response


@app.get("/detalhes/<int:id>")
def detalhes(id):
    response = jsonify(detalhesfilme(id))
    return response


@app.get("/aleatorio")
def aleatorio():
    while True:
        try:
            id = random.randint(2, 824845)
            dados = detalhesfilme(id)
            if dados['poster'] is not None:  #and (dados['sinopse'] != ""):
                response = jsonify(dados)
                return response
        except Exception as e:
            print(f"Erro ao buscar dados para o ID {id}: {e}")
            continue


@app.post("/recomendacao")
def recomendacao():
    response = recomendarfilmes(request.json)
    return response


@app.post("/recomendacaofiltrada")
def recomendacaofiltrada():
    params = request.get_json(force=True)
    print(request.data, file=sys.stderr)
    idfilme = filtrada(params)
    response = jsonify(detalhesfilme(idfilme))
    return response


if __name__ == '__main__':
    app.run(debug=True)
