import random

from flask import Flask, jsonify, request
from endpoints.ListaFilmes import listafilmes
from endpoints.DetalhesFilmes import detalhesfilme
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


"""
@app.get("/aleatorio")
def aleatorio():
    id = random.randint(2, 824845)
    return jsonify(detalhesfilme(id))
"""


#IMPORTANTE: O FRONTEND DEVE REGISTRAR O DETALHES<ID> DOS FILMES PREFERIDOS NO MOMENTO QUE SÃO SELECIONADOS
#E ENVIAR UM ARRAY DE DICIONÁRIOS PARA O ENDPOINT /RECOMENDAÇÃO
#ISSO EVITA QUE A CHAVE DE API FIQUE SOBRECARREGADA E A APLICAÇÃO LENTA

@app.post("/recomendacao")
def recomendacao():
    return recomendarfilmes(request.json)


if __name__ == '__main__':
    app.run()
