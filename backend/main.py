from flask import Flask, jsonify
from endpoints.ListaFilmes import listafilmes
app = Flask(__name__)

@app.get("/filmes/<int:pagina>")
def filmes(pagina):
    return jsonify(listafilmes(pagina))
