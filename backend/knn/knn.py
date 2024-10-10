from sklearn.neighbors import NearestNeighbors
import numpy as np

def kvizinhos(modelo, similares):
    Modelo = np.array(modelo)
    Similares = np.array(similares)

    nbrs = NearestNeighbors(n_neighbors=5, algorithm='ball_tree').fit(Similares)
    distances, indices = nbrs.kneighbors(Modelo)

    print(distances)
    print(indices)

    return indices

