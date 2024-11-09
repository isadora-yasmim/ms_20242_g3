import requests
import os
from urllib.parse import urlencode
from dotenv import load_dotenv
from classes.filme import Filme

load_dotenv()
api_key = os.getenv('API_KEY')


def busca(params, page):
    url = f"https://api.themoviedb.org/3/search/movie?include_adult=true&language=pt-BR&page={page}"
    headers = {
        "accept": "application/json",
        "Authorization": f"Bearer {api_key}"
    }

    param_string = urlencode(params)
    novaurl = f"{url}&{param_string}"
    response = requests.get(novaurl, headers=headers).json()
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
        filmes.append(obj.to_dict())
    return filmes
