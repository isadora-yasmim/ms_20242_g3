class Detalhes:
    def __init__(self, filmeid, titulo, poster, genero, mediavotos, numvotos, cast, streaming, sinopse):
        self.filmeid = filmeid
        self.titulo = titulo
        self.poster = poster
        self.genero = genero
        self.mediaVotos = mediavotos
        self.numVotos = numvotos
        self.cast = cast
        self.streaming = streaming
        self.sinopse = sinopse

    def to_dict(self):
        return {
            "id": self.filmeid,
            "titulo": self.titulo,
            "poster": self.poster,
            "genero": self.genero,
            "mediaVotos": self.mediaVotos,
            "numVotos": self.numVotos,
            "cast": self.cast,
            "streaming": self.streaming,
            "sinopse": self.sinopse
        }