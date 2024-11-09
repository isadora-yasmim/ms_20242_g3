import requests
import os
from dotenv import load_dotenv
from classes.filme import Filme

load_dotenv()
api_key = os.getenv('API_KEY')


#faz um Get no tmdb e recebe uma lista de filmes populares com base na página fornecida
def listafilmes(pagina):
    url = f"https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=pt-BR&page={pagina}&sort_by=popularity.desc"
    headers = {
        "accept": "application/json",

        # não esquecer de colocar uma chave de api em um arquivo .env dentro da pasta backend
        "Authorization": f"Bearer {api_key}"
    }

    # response recebe o dicionário com as informações
    response = requests.get(url, headers=headers).json()

    # declara a lista que vai receber os filmes
    filmes = []

    # para cada filme em results (chave do dicionário em response)
    for filme in response['results']:
        # cria um objeto da classe Filme com os atributos que vão ser utilizados
        obj = Filme(
            filme['id'],
            filme['title'],
            filme['poster_path'],
            filme['genre_ids'],
            filme['vote_average'],
            filme['vote_count']
        )
        #adiciona na lista o objeto
        filmes.append(obj.to_dict())
    #retorna o objeto
    return filmes
