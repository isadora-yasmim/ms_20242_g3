import math
import random

import requests
import os
from urllib.parse import urlencode
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv('API_KEY')


def filtrada(params):
    page = 1
    url = f"https://api.themoviedb.org/3/discover/movie?include_video=false&language=pt-BR&page={page}&sort_by=popularity.desc"
    headers = {
        "accept": "application/json",
        "Authorization": f"Bearer {api_key}"
    }
    param_string = urlencode(params)
    novaurl = f"{url}&{param_string}" if param_string else url
    response = requests.get(novaurl, headers=headers).json()
    numresultados = response['total_results']
    if numresultados > 20:
        page = random.randint(1, math.ceil(numresultados / 20))
        url = f"https://api.themoviedb.org/3/discover/movie?include_video=false&language=pt-BR&page={page}&sort_by=popularity.desc"
        novaurl = f"{url}&{param_string}" if param_string else url
        response = requests.get(novaurl, headers=headers).json()
        return response['results'][random.randint(0, (numresultados % 20) - 1)]['id']
    return response['results'][random.randint(0, (numresultados % 20) - 1)]['id']
