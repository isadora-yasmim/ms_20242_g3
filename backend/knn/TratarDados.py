import time

from .filmeideal import FilmeIdeal
import requests
import os
from dotenv import load_dotenv
from endpoints.DetalhesFilmes import detalhesfilme
from .knn import kvizinhos
import concurrent.futures

load_dotenv()
api_key = os.getenv('API_KEY')
filmesComparar = []

maxExecucoes = 20

def recomendarfilmes(filmespreferidos):
    inicio = time.time()

    filmesSimilares = []
    filmeideal = FilmeIdeal(filmespreferidos)
    filmeideal.filmemodelo(filmespreferidos)
    with concurrent.futures.ThreadPoolExecutor(max_workers=maxExecucoes) as executor:
        future_to_filme = {}
        for filme in filmespreferidos:
            for i in range(5):
                url = f"https://api.themoviedb.org/3/movie/{filme['id']}/recommendations?language=pt-BR&page={i+1}"
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
    with concurrent.futures.ThreadPoolExecutor(max_workers=maxExecucoes) as executor:
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

    fim = time.time()  # Armazena o tempo após a execução

    tempo_execucao = fim - inicio  # Calcula a diferença
    print(f"A função levou {tempo_execucao} segundos para executar.")
    modelo = []
    similares = []
    ids = {}
    for filme in filmesComparar:
        atributos = []
        cast = []
        generos = []
        for chave, valor in filme.cast.items():
            cast.append(valor)
        for chave, valor in filme.genero.items():
            generos.append(valor)
        atributos.append(cast)
        atributos.append(generos)
        similares.append(atributos)
        ids[len(similares) - 1] = filme.id
    print(ids)
    print(len(filmesComparar))
    for i in range(1):
        atributosModelo = []
        cast = []
        generos = []
        for chave, valor in filmeideal.cast.items():
            cast.append(valor)
        for chave, valor in filmeideal.genero.items():
            generos.append(valor)
        atributosModelo.append(cast)
        atributosModelo.append(generos)
        modelo.append(atributosModelo)

    indices = kvizinhos(modelo, similares)
    idsEscolhidos = []
    for indice in indices:
        for i in indice:
            print(i)
            idsEscolhidos.append(ids[int(i)])  # Converte 'i' para inteiro normal

    return list(set(idsEscolhidos))


def processar_filme_similar(filme, filmeideal):
    obj = FilmeIdeal(filme)
    obj.filmesimilar(filmeideal, filme)
    return obj
