import requests
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv('API_KEY')


def listafilmes(pagina):
    url = f"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page={pagina}&sort_by=popularity.desc"
    headers = {
        "accept": "application/json",
        "Authorization": f"Bearer {api_key}"
    }

    response = requests.get(url, headers=headers)
