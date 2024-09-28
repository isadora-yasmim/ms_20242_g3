from flask import Flask, jsonify
from endpoints.ListaFilmes import listafilmes

app = Flask(__name__)


# declara o endpoint como um Get com a url /filmes/<int:pagina>
@app.get("/filmes/<int:pagina>")
def filmes(pagina):
    # retorna o request com um json com a lista de filmes naquela página
    # os filmes estão ordenados por popularidade
    return jsonify(listafilmes(pagina))


print(listafilmes(1))  #apenas para testar a saída

if __name__ == '__main__':
    app.run()
