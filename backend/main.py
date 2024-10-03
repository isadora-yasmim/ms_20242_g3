import random

from flask import Flask, jsonify
from endpoints.ListaFilmes import listafilmes
from endpoints.DetalhesFilmes import detalhesfilme

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

if __name__ == '__main__':
    app.run()
