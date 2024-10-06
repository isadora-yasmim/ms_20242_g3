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
        for chave, valor in modelo.genero.items():
            if valor > 0:
                self.genero[chave] = self.genero.get(chave, 0) + 1
        for ator in filme['cast']:
            if ator['id'] in modelo.cast:
                self.cast[ator['id']] = 1
            else:
                self.cast[ator['id']] = 0

    def __str__(self):
        return f"\n\n\nFilme, generos: {self.genero},\n casts: {self.cast}\n"
