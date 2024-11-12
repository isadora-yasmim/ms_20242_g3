from sklearn.neighbors import NearestNeighbors
import numpy as np

def padronizar_lista(lista, tamanho_maximo):
    # Preenche a lista com zeros até atingir o tamanho_maximo
    return lista + [0] * (tamanho_maximo - len(lista))

def kvizinhos(modelo, similares):
    # Encontrar o tamanho máximo para os casts e gêneros
    max_cast_size = max([len(filme[0]) for filme in similares + modelo])
    max_genre_size = max([len(filme[1]) for filme in similares + modelo])

    # Padronizar o tamanho das listas de casts e gêneros
    modelo_padronizado = [
        padronizar_lista(filme[0], max_cast_size) + padronizar_lista(filme[1], max_genre_size)
        for filme in modelo
    ]

    similares_padronizado = [
        padronizar_lista(filme[0], max_cast_size) + padronizar_lista(filme[1], max_genre_size)
        for filme in similares
    ]

    # Converter para arrays NumPy
    Modelo = np.array(modelo_padronizado)
    Similares = np.array(similares_padronizado)

    # Treinar o modelo de vizinhos mais próximos
    nbrs = NearestNeighbors(n_neighbors=20, algorithm='ball_tree').fit(Similares)
    distances, indices = nbrs.kneighbors(Modelo)
    print(Similares)
    print(distances)
    print(indices)

    return indices
