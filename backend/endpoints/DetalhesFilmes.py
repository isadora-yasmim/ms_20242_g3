import requests
import os
from dotenv import load_dotenv
from classes.detalhes import Detalhes

load_dotenv()
api_key = os.getenv('API_KEY')


def detalhesfilme(id):
    # faz um Get no tmdb e recebe as informações do filme junto com os detalhes
    url = f"https://api.themoviedb.org/3/movie/{id}?append_to_response=credits&language=pt-BR"
    headers = {
        "accept": "application/json",

        # não esquecer de colocar uma chave de api em um arquivo .env dentro da pasta backend
        "Authorization": f"Bearer {api_key}"
    }
    # response recebe o dicionário com as informações
    response1 = requests.get(url, headers=headers).json()

    # faz um Get no tmdb e recebe as informações do serviço de streaming, se tiver
    url = f"https://api.themoviedb.org/3/movie/{id}/watch/providers"

    headers = {
        "accept": "application/json",
        "Authorization": f"Bearer {api_key}"
    }
    # response recebe o dicionário com as informações
    response2 = requests.get(url, headers=headers).json()

    cast = []

    for pessoa in response1['credits']['cast']:
        ator = {'nome': pessoa['name'], 'id': pessoa['id'], 'imagem': pessoa['profile_path']}
        cast.append(ator)
        if len(cast) >= 20:
            break

    streaming_info = response2.get('results', {}).get('BR', {})

    obj = Detalhes(
        response1['id'],
        response1['title'],
        response1['poster_path'],
        response1['genres'],
        response1['vote_average'],
        response1['vote_count'],
        cast,
        streaming_info,
        response1['overview']
    )
    return obj.to_dict()

