#declara a classe filmes que vai servir de molde para as informações que vão ser retornadas no endpoint
class Filme:
    def __init__(self, filmeid, titulo, poster, genero, mediavotos, numvotos):
        self.filmeid = filmeid
        self.titulo = titulo
        self.poster = poster
        self.genero = genero
        self.mediaVotos = mediavotos
        self.numVotos = numvotos

    def to_dict(self):
        return {
            "id": self.filmeid,
            "titulo": self.titulo,
            "poster": self.poster,
            "genero": self.genero,
            "mediaVotos": self.mediaVotos,
            "numVotos": self.numVotos
        }
