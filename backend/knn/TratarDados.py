from .filmeideal import FilmeIdeal
import requests
import os
from dotenv import load_dotenv
from endpoints.DetalhesFilmes import detalhesfilme
import concurrent.futures

load_dotenv()
api_key = os.getenv('API_KEY')
filmesComparar = []


def recomendarfilmes(filmespreferidos):
    filmesSimilares = []
    filmeideal = FilmeIdeal(filmespreferidos)
    filmeideal.filmemodelo(filmespreferidos)
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        future_to_filme = {}
        for filme in filmespreferidos:
            url = f"https://api.themoviedb.org/3/movie/{filme['id']}/similar?language=pt-BR&page=1"
            headers = {
                "accept": "application/json",
                "Authorization": f"Bearer {api_key}"
            }
            response = requests.get(url, headers=headers).json()

            for dado in response['results']:
                future = executor.submit(detalhesfilme, dado['id'])
                future_to_filme[future] = dado['id']

        for future in concurrent.futures.as_completed(future_to_filme):
            try:
                result = future.result()
                filmesSimilares.append(result)
            except Exception as exc:
                print(f"Ocorreu um erro ao processar o filme {future_to_filme[future]}: {exc}")
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        future_to_comparar = {}
        for filme in filmesSimilares:
            future = executor.submit(processar_filme_similar, filme, filmeideal)
            future_to_comparar[future] = filme

        # Coletar os resultados da comparação de filmes
        for future in concurrent.futures.as_completed(future_to_comparar):
            try:
                result = future.result()
                filmesComparar.append(result)
            except Exception as exc:
                print(f"Erro ao comparar o filme {future_to_comparar[future]}: {exc}")
    return '\n'.join(str(filme) for filme in filmesComparar)  #apenas para testar a saída, isso nao vao estar no codigo


def processar_filme_similar(filme, filmeideal):
    obj = FilmeIdeal(filme)
    obj.filmesimilar(filmeideal, filme)
    return obj
