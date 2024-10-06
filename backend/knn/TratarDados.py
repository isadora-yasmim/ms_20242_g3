from .filmeideal import FilmeIdeal
import requests
import os
from dotenv import load_dotenv
from endpoints.DetalhesFilmes import detalhesfilme

load_dotenv()
api_key = os.getenv('API_KEY')
filmesComparar = []
def recomendarfilmes(filmespreferidos):
    filmesSimilares = []
    filmeideal = FilmeIdeal(filmespreferidos)
    filmeideal.filmemodelo(filmespreferidos)
    for filme in filmespreferidos:
        url = f"https://api.themoviedb.org/3/movie/{filme['id']}/similar?language=pt-BR&page=1"
        headers = {
            "accept": "application/json",
            "Authorization": f"Bearer {api_key}"
        }
        response = requests.get(url, headers=headers).json()
        for dado in response['results']:
            filmesSimilares.append(detalhesfilme(dado['id']))
    for filme in filmesSimilares:
        obj = FilmeIdeal(filme)
        obj.filmesimilar(filmeideal, filme)
        filmesComparar.append(obj)
    return '\n'.join(str(filme) for filme in filmesComparar)





