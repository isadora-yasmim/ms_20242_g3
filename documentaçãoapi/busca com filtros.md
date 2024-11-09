# Retorna os detalhes de um filme aleatório com base nos filtros

**URL** : `https://randomgosling.onrender.com/search/{página}`

**Method** : `POST`

**Exemplo de resposta json**


Json enviado no post, com alguns exemplos de parâmetros
```
{
    "region": "BR",
    "with_genres": "28,12",
    "with_original_language": "en",
    "with_runtime.gte": 1,
    "vote_count.gte": 1,
    "vote_average.gte": 1,
    "certification_country": "BR",
    "certification": "L",
    "certification.lte": "L",
    "include_adult": False,
    "with_watch_monetization_types": "flatrate|free"
}
```
resposta
```json
{
   "cast":[
      {
         "id":3151,
         "imagem":"/7jWVWLr1VJqQrN3d4YJaATCIHRw.jpg",
         "nome":"Jack Lemmon"
      },
      {
         "id":30123,
         "imagem":"/2WesW19wpxYve32Zp3oq1pwzoen.jpg",
         "nome":"Lee Grant"
      },
      {
         "id":30585,
         "imagem":"/sWRvlw6udCXbMWczGA4TGWWC0Jn.jpg",
         "nome":"Brenda Vaccaro"
      },
      {
         "id":7664,
         "imagem":"/djfCB0jPOgmq3w7RD3BMLzWsAu8.jpg",
         "nome":"Joseph Cotten"
      },
      {
         "id":8725,
         "imagem":"/9pIjSCaOSIp9IbMVUaZhQ4dWc9F.jpg",
         "nome":"Olivia de Havilland"
      },
      {
         "id":7333,
         "imagem":"/xD9rZ6SLGPVs6QHjart68QhjVTt.jpg",
         "nome":"Darren McGavin"
      },
      {
         "id":113,
         "imagem":"/4zPu5YaRPbhrcp9aVjXQDjpfwPC.jpg",
         "nome":"Christopher Lee"
      },
      {
         "id":12950,
         "imagem":"/fIVmcPEcPmh0Rbx4mYf9aneCmDe.jpg",
         "nome":"George Kennedy"
      },
      {
         "id":854,
         "imagem":"/yId5fdDqShOkr0YjCoJbUOZipcX.jpg",
         "nome":"James Stewart"
      },
      {
         "id":103087,
         "imagem":"/jRJuM943e4dwyJli5yWiWNYr5w1.jpg",
         "nome":"Maidie Norman"
      },
      {
         "id":41264,
         "imagem":"/nPHmqljCl35P7qSYezTlUDcRvKF.jpg",
         "nome":"Pamela Bellwood"
      },
      {
         "id":2396621,
         "imagem":"None",
         "nome":"Anthony Battaglia"
      },
      {
         "id":8183,
         "imagem":"/lqcsQzS7cs3H58C1rzls575MN5x.jpg",
         "nome":"Kathleen Quinlan"
      },
      {
         "id":22494,
         "imagem":"/8O04qakmfDeAdZetTXlOHf8jjEj.jpg",
         "nome":"Arlene Golonka"
      },
      {
         "id":118487,
         "imagem":"None",
         "nome":"Elizabeth Cheshire"
      },
      {
         "id":588,
         "imagem":"/d9XViKO9AELfSvUZAwzaXMkrGxl.jpg",
         "nome":"M. Emmet Walsh"
      },
      {
         "id":33848,
         "imagem":"/uNbHz1JkwdTE9JL4D8ZGHStGukZ.jpg",
         "nome":"Gil Gerard"
      },
      {
         "id":15857,
         "imagem":"/14SEd9m1ilVTPIB8RhHU5U4KwEW.jpg",
         "nome":"James Booth"
      },
      {
         "id":9597,
         "imagem":"/yihCpzbX8zoDn8CI8erebgFFOcL.jpg",
         "nome":"George Furth"
      },
      {
         "id":100559,
         "imagem":"/3s8RJeWFQyxdTFi3e2BZBkzmYIP.jpg",
         "nome":"Peter Fox"
      }
   ],
   "genero":[
      {
         "id":28,
         "name":"Ação"
      },
      {
         "id":12,
         "name":"Aventura"
      },
      {
         "id":18,
         "name":"Drama"
      },
      {
         "id":53,
         "name":"Thriller"
      }
   ],
   "id":7227,
   "mediaVotos":5.6,
   "numVotos":285,
   "poster":"/m9b3frZR0Wu8I3ayN3QPrxfZMvC.jpg",
   "sinopse":"Em uma viagem para Palm Beach, onde vai inaugurar um museu composto de peças da sua coleção particular, o magnata Philip Stevens transporta em seu luxuoso Jumbo 747 a sua coleção de arte, tendo seus amigos como convidados. Mas o avião é sequestrado, sofre um acidente e cai no oceano, ficando submerso em águas rasas. Será que a tripulação e os passageiros conseguirão escapar antes que o avião seja invadido totalmente pela água do mar?",
   "streaming":{
      
   },
   "titulo":"Aeroporto 77"
}
```



## Notas

* A resposta é um array de dicionários e a entrada um dicionário que deve ter uma chave/valor para cada parâmetro de filtro, não precisa ter todos,
* apenas os que for usar, alguns são obrogatórios, como "include_adult".
  
# Parâmetros de filtro 
(explicação gerada pelo chat gpt, qualquer erro eu dou um jeito)

### 1. **`sort_by`**
- **Tipo**: String
- **Valores possíveis**:
  - `popularity.desc`
  - `popularity.asc`
  - `release_date.desc`
  - `release_date.asc`
  - `vote_average.desc`
  - `vote_average.asc`
  - `vote_count.desc`
  - `vote_count.asc`
- **Significado**: Define como os resultados são ordenados.

### 2. **`page`**
- **Tipo**: Inteiro
- **Valores possíveis**: Qualquer número inteiro positivo.
- **Significado**: Página de resultados (padrão é 1).

### 3. **`language`**
- **Tipo**: String
- **Valores possíveis**: Qualquer código de idioma (ex: `pt-BR`, `en-US`).
- **Significado**: Idioma dos resultados (títulos, descrições, etc.).

### 4. **`include_adult`**
- **Tipo**: Booleano
- **Valores possíveis**: `true`, `false`
- **Significado**: Incluir ou não conteúdo adulto.

### 5. **`include_video`**
- **Tipo**: Booleano
- **Valores possíveis**: `true`, `false`
- **Significado**: Incluir filmes com vídeos disponíveis (trailers, etc.).

### 6. **`primary_release_year`**
- **Tipo**: Inteiro
- **Valores possíveis**: Qualquer ano (ex: 2023, 2024).
- **Significado**: Filtra pelos filmes lançados no ano especificado.

### 7. **`year`**
- **Tipo**: Inteiro
- **Valores possíveis**: Qualquer ano.
- **Significado**: Filtra os filmes de acordo com o ano de lançamento.

### 8. **`with_genres`**
- **Tipo**: String (IDs de gênero separados por vírgula)
- **Valores possíveis**: IDs de gêneros (ex: `28` para Ação, `12` para Aventura).
- **Significado**: Inclui filmes de determinados gêneros. IDs de gênero podem ser encontrados na documentação oficial.

### 9. **`without_genres`**
- **Tipo**: String (IDs de gênero separados por vírgula)
- **Valores possíveis**: IDs de gêneros.
- **Significado**: Exclui filmes de determinados gêneros.

### 10. **`with_keywords`**
- **Tipo**: String (IDs de palavras-chave separados por vírgula)
- **Valores possíveis**: IDs de palavras-chave.
- **Significado**: Filtra filmes que contenham determinadas palavras-chave (ex: `action`, `love`).

### 11. **`without_keywords`**
- **Tipo**: String (IDs de palavras-chave separados por vírgula)
- **Valores possíveis**: IDs de palavras-chave.
- **Significado**: Exclui filmes com determinadas palavras-chave.

### 12. **`with_cast`**
- **Tipo**: String (IDs de atores separados por vírgula)
- **Valores possíveis**: IDs de atores.
- **Significado**: Filtra filmes com atores específicos.

### 13. **`with_crew`**
- **Tipo**: String (IDs de membros da equipe de produção separados por vírgula)
- **Valores possíveis**: IDs de membros da equipe (diretores, roteiristas, etc.).
- **Significado**: Filtra filmes com membros específicos da equipe.

### 14. **`with_original_language`**
- **Tipo**: String
- **Valores possíveis**: Códigos de idioma (ex: `en`, `pt`).
- **Significado**: Filtra filmes pelo idioma original.

### 15. **`without_keywords`**
- **Tipo**: String (IDs de palavras-chave separados por vírgula)
- **Valores possíveis**: IDs de palavras-chave.
- **Significado**: Exclui filmes com determinadas palavras-chave.

### 16. **`with_runtime.gte`**
- **Tipo**: Inteiro
- **Valores possíveis**: Qualquer número inteiro.
- **Significado**: Define a duração mínima do filme (em minutos).

### 17. **`with_runtime.lte`**
- **Tipo**: Inteiro
- **Valores possíveis**: Qualquer número inteiro.
- **Significado**: Define a duração máxima do filme (em minutos).

### 18. **`with_release_type`**
- **Tipo**: String
- **Valores possíveis**:
  - `1` para lançamento limitado.
  - `2` para lançamento em cinema.
  - `3` para lançamento digital.
  - `4` para lançamento físico.
  - `5` para lançamento de TV.
- **Significado**: Define o tipo de lançamento.

### 19. **`vote_average.gte`**
- **Tipo**: Número decimal
- **Valores possíveis**: Qualquer número decimal.
- **Significado**: Filtra filmes com uma avaliação média maior ou igual ao valor fornecido.

### 20. **`vote_count.gte`**
- **Tipo**: Inteiro
- **Valores possíveis**: Qualquer número inteiro.
- **Significado**: Filtra filmes com um número mínimo de votos.

### 21. **`vote_average.lte`**
- **Tipo**: Número decimal
- **Valores possíveis**: Qualquer número decimal.
- **Significado**: Filtra filmes com uma avaliação média menor ou igual ao valor fornecido.

### 22. **`vote_count.lte`**
- **Tipo**: Inteiro
- **Valores possíveis**: Qualquer número inteiro.
- **Significado**: Filtra filmes com um número máximo de votos.

### 23. **`certification_country`**
- **Tipo**: String
- **Valores possíveis**: Códigos de país (ex: `US`, `BR`).
- **Significado**: Filtra filmes por país de certificação.

### 24. **`certification`**
- **Tipo**: String
- **Valores possíveis**: Certificações de conteúdo (ex: `PG-13`, `R`).
- **Significado**: Filtra filmes por certificação.

### 25. **`certification.lte`**
- **Tipo**: String
- **Valores possíveis**: Certificações de conteúdo (ex: `PG`, `R`).
- **Significado**: Filtra filmes por certificação máxima.

### 26. **`with_watch_monetization_types`**
- **Tipo**: String (separado por pipe `|`)
- **Valores possíveis**: 
  - `flatrate`
  - `free`
  - `ads`
  - `rent`
  - `buy`
- **Significado**: Filtra filmes com determinados tipos de monetização de exibição (ex: gratuito, aluguel, etc.).

### 27. **`region`**
- **Tipo**: String
- **Valores possíveis**: Códigos de país (ex: `US`, `BR`).
- **Significado**: Filtra filmes por região específica.
