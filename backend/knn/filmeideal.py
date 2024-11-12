class FilmeIdeal:
    def __init__(self, filmes):
        self.genero = {
            28: 0,
            12: 0,
            16: 0,
            35: 0,
            80: 0,
            99: 0,
            18: 0,
            10751: 0,
            14: 0,
            36: 0,
            27: 0,
            10402: 0,
            9648: 0,
            10749: 0,
            878: 0,
            10770: 0,
            53: 0,
            10752: 0,
            37: 0
        }
        self.cast = {}
        self.id = 0

    def filmemodelo(self, filmes):
        for filme in filmes:
            for item in filme['genero']:
                self.genero[item['id']] += 1
            for ator in filme['cast']:
                if ator['id'] not in self.cast:
                    self.cast[ator['id']] = 1
                else:
                    self.cast[ator['id']] += 1

    def filmesimilar(self, modelo, filme):
        for genero in filme['genero']:
            self.genero[genero['id']] = modelo.genero[genero['id']]
        self.cast = {ator_id: 0 for ator_id in modelo.cast}

        for ator in filme['cast']:
            if ator['id'] in modelo.cast:
                self.cast[ator['id']] = 1  # Se o ator estiver no modelo, marca como 1
        self.id = filme['id']

    def __str__(self): #apenas para testar se esta funcionando, isso não vai estar no código
        return f"\n\n\nFilme, generos: {self.genero},\n casts: {self.cast}\n, id: {self.id}"
