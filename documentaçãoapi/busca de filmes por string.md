# Mostra uma lista com até 20 filmes

Podem ser chamadas várias páginas com filmes diferentes, cada uma contento 20 filmes (se tiver filmes o suficiente para aquela string), sendo esses filmes que contenham as palavras presentes na string de busca

**URL** : `https://randomgosling.onrender.com/search/{página}`

**Method** : `POST`

**Exemplo de resposta json**

Para página número 1 e string "shrek":

Json enviado no post
```
{
    "query": "shrek"
}
```
resposta
```json
[
   {
      "genero":[
         16,
         35,
         14,
         12,
         10751
      ],
      "id":808,
      "mediaVotos":7.743,
      "numVotos":17054,
      "poster":"/dyhaB19AICF7TO7CK2aD6KfymnQ.jpg",
      "titulo":"Shrek"
   },
   {
      "genero":[
         35,
         12,
         14,
         16,
         10751
      ],
      "id":10192,
      "mediaVotos":6.379,
      "numVotos":7299,
      "poster":"/fxMK2UCjvB8hOFod3v2wQDXLGF3.jpg",
      "titulo":"Shrek Para Sempre: O Capítulo Final"
   },
   {
      "genero":[
         14,
         12,
         16,
         35,
         10751
      ],
      "id":810,
      "mediaVotos":6.3,
      "numVotos":8943,
      "poster":"/abw1mIJIjG9X3xSEffE9siLcOkN.jpg",
      "titulo":"Shrek Terceiro"
   },
   {
      "genero":[
         16,
         35,
         10751,
         27
      ],
      "id":48466,
      "mediaVotos":6.682,
      "numVotos":460,
      "poster":"/aAQQJhX8NqKZ7ZNDUPQQKi1wK8h.jpg",
      "titulo":"O Susto de Shrek"
   },
   {
      "genero":[
         12,
         16,
         35,
         14,
         10751
      ],
      "id":13394,
      "mediaVotos":6.4,
      "numVotos":841,
      "poster":"/bkIEMVAYQHUhkxyLA9dhozDCLAt.jpg",
      "titulo":"Shrek Bate o Sino"
   },
   {
      "genero":[
         16,
         10751,
         35,
         14
      ],
      "id":421892,
      "mediaVotos":0.0,
      "numVotos":0,
      "poster":"/8XwmMjwiQ91Rm0eU4AcxyFA3XUZ.jpg",
      "titulo":"Shrek 5"
   },
   {
      "genero":[
         10402,
         35,
         14
      ],
      "id":381696,
      "mediaVotos":7.2,
      "numVotos":118,
      "poster":"/wRvMRdLa8zQ85drGAWEsZTuKJO.jpg",
      "titulo":"Shrek, o Musical"
   },
   {
      "genero":[
         35,
         10751,
         16
      ],
      "id":128914,
      "mediaVotos":6.7,
      "numVotos":121,
      "poster":"/3wFlq0jFqW7vS0ttjLsWaoWOVKA.jpg",
      "titulo":"Assustando Shrek"
   },
   {
      "genero":[
         16,
         10751,
         35,
         14,
         12,
         10749
      ],
      "id":809,
      "mediaVotos":7.281,
      "numVotos":12236,
      "poster":"/2yYP0PQjG8zVqturh1BAqu2Tixl.jpg",
      "titulo":"Shrek 2"
   },
   {
      "genero":[
         16,
         35,
         10402,
         10751,
         10749
      ],
      "id":26840,
      "mediaVotos":6.4,
      "numVotos":128,
      "poster":"/lJg4alrYfp7CDNVID4iGefT9CIn.jpg",
      "titulo":"Shrek no Baile de Karaokê do Pântano"
   },
   {
      "genero":[
         14,
         16,
         35,
         10751
      ],
      "id":51256,
      "mediaVotos":5.9,
      "numVotos":171,
      "poster":"/rNMPAu1s4P8PRymJRnVdn4G2rin.jpg",
      "titulo":"Natal Shrektacular do Burro"
   },
   {
      "genero":[
         10402,
         35,
         16,
         10751
      ],
      "id":58508,
      "mediaVotos":6.4,
      "numVotos":232,
      "poster":"/AmpMaEDnaCI6wRsgIE0XfOWzyYb.jpg",
      "titulo":"Shrek e os Ídolos de Tão Tão Distante"
   },
   {
      "genero":[
         35
      ],
      "id":1192714,
      "mediaVotos":0.0,
      "numVotos":0,
      "poster":"/af15KkhD9Iuc1CBHnHgZaELZugT.jpg",
      "titulo":"Shreklife"
   },
   {
      "genero":[
         10751
      ],
      "id":252634,
      "mediaVotos":8.0,
      "numVotos":38,
      "poster":"/j1Ew14NWmwTYqGYNNS7YTWIJXae.jpg",
      "titulo":"Shrek Stories"
   },
   {
      "genero":[
         16,
         10751,
         14,
         35
      ],
      "id":151316,
      "mediaVotos":6.2,
      "numVotos":37,
      "poster":"/z9EENaDvmHDHXaNdhJYDBTvXuWo.jpg",
      "titulo":"Shrek's Yule Log"
   },
   {
      "genero":[
         27,
         35,
         80
      ],
      "id":1245446,
      "mediaVotos":0.0,
      "numVotos":0,
      "poster":"/3OR5trlYxAZenJjOcWYxS6IaL5K.jpg",
      "titulo":"Shrek Crack"
   },
   {
      "genero":[
         16,
         35,
         27,
         14
      ],
      "id":1294183,
      "mediaVotos":0.0,
      "numVotos":0,
      "poster":"/ugQx6Ga1bnUJbAJm1CC2ousiZ1Y.jpg",
      "titulo":"Shrek: I Feel Good"
   },
   {
      "genero":[
         99
      ],
      "id":726391,
      "mediaVotos":7.5,
      "numVotos":10,
      "poster":"/lP2JtQ1sqAi8Wc8zx2mvfkIcKxZ.jpg",
      "titulo":"Shrek: Once Upon a Time"
   },
   {
      "genero":[
         99,
         10770
      ],
      "id":575506,
      "mediaVotos":9.7,
      "numVotos":5,
      "poster":"/65nYHT6wbfbrkUcAr5lxcPOdUCt.jpg",
      "titulo":"Creating a Fairy Tale World: The Making of Shrek"
   },
   {
      "genero":[
         35,
         18
      ],
      "id":735251,
      "mediaVotos":6.4,
      "numVotos":7,
      "poster":"/nPr5OAkJ75k910mKXYgjkxCa166.jpg",
      "titulo":"L'amore ai tempi di Sh.Rek"
   }
]
```



## Notas

* A resposta é um array de dicionários e a entrada um dicionário que deve ter a chave "query" com o valor sendo a string de busca
