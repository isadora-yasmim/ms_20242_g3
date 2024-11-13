# Retorna filmes similares

recebe filmes e retorna uma lista com ids de filmes similares
**URL** : `https://randomgosling.onrender.com/recomendacao`

**Method** : `POST`

**Exemplo de resposta json**

Para filmes similares "Dragon Ball Super: Super Hero" e "Dragon Ball Super: Broly":

Json enviado no post (deve ser um array de dicionários, onde cada elemento é a resposta dada por /detalhes para aquele filme)
```
[
   {
      "cast":[
         {
            "id":90496,
            "imagem":"/jxbXdejmPoiKnNoQz7Dkb80qC26.jpg",
            "nome":"Masako Nozawa"
         },
         {
            "id":85286,
            "imagem":"/zZjO0NxIbEhYW3507gXVnvWeRkG.jpg",
            "nome":"古川登志夫"
         },
         {
            "id":90569,
            "imagem":"/bEv0ho89VNgWkCCmT2GdNjMAuvZ.jpg",
            "nome":"皆口裕子"
         },
         {
            "id":93801,
            "imagem":"/u2r0u8tOa0cyh7nawcEOPpcEZr1.jpg",
            "nome":"Hiroshi Kamiya"
         },
         {
            "id":93803,
            "imagem":"/i8n9U3JlujjyPmiZPHGkpwxkh7X.jpg",
            "nome":"Mamoru Miyano"
         },
         {
            "id":19588,
            "imagem":"/8qEEhHUObNvGQr4e6eqLu5z4qTz.jpg",
            "nome":"Miyu Irino"
         },
         {
            "id":1468251,
            "imagem":"/1PZIIKxOAgn6YexksH6weYnzzhh.jpg",
            "nome":"Ryota Takeuchi"
         },
         {
            "id":124478,
            "imagem":"/12lHLihOdJm6AmAhRLNOLbeTfqn.jpg",
            "nome":"久川綾"
         },
         {
            "id":65510,
            "imagem":"/by4t1tYtEXsfbFj9TvOjozBmQla.jpg",
            "nome":"Mayumi Tanaka"
         },
         {
            "id":122501,
            "imagem":"/1fiJvPrzz8Fqsjr5DVQclGojxO5.jpg",
            "nome":"Ryo Horikawa"
         },
         {
            "id":1686,
            "imagem":"/gDiYLUdl9zXXJmhE0bAuB1Jm3FJ.jpg",
            "nome":"草尾毅"
         },
         {
            "id":20664,
            "imagem":"/biov5jENp2XYfehkcdnRvi796Wi.jpg",
            "nome":"山寺宏一"
         },
         {
            "id":78402,
            "imagem":"/2INsHYbx9gEhhzXPHdqBDdvHjFt.jpg",
            "nome":"Masakazu Morita"
         },
         {
            "id":115790,
            "imagem":"/5jJgMyFAP3GgQtFxP2qe0oE4LHk.jpg",
            "nome":"島田敏"
         },
         {
            "id":144655,
            "imagem":"/cv5zuPZySNsHXu24pjKLYCRzJ2J.jpg",
            "nome":"Tomokazu Sugita"
         },
         {
            "id":24651,
            "imagem":"/1h4C1kz8mziHmiB91MliTDHwgoh.jpg",
            "nome":"Nana Mizuki"
         },
         {
            "id":144650,
            "imagem":"/zaSJKfuKhw7e4VTnTKnlHBRzjQU.jpg",
            "nome":"Aya Hirano"
         },
         {
            "id":1241855,
            "imagem":"/3TXI27vtoXBlyJT0lj2fVUL3FJ7.jpg",
            "nome":"魚建"
         },
         {
            "id":84504,
            "imagem":"/sYHA1BlH2itS3XGv9K2xjqsTFcC.jpg",
            "nome":"若本規夫"
         },
         {
            "id":2019938,
            "imagem":"/aWjTEMYCXDQyPt5rVU4BrAMjsGM.jpg",
            "nome":"ボルケーノ太田"
         }
      ],
      "genero":[
         {
            "id":16,
            "name":"Animação"
         },
         {
            "id":878,
            "name":"Ficção científica"
         },
         {
            "id":28,
            "name":"Ação"
         }
      ],
      "id":610150,
      "mediaVotos":7.9,
      "numVotos":2814,
      "poster":"/FiqBRypTDyHzqcxdbpPb3ddFep.jpg",
      "sinopse":"O exército Red Ribbon havia sido destruído por Son Goku... Mas certos indivíduos decidiram levar adiante sua missão e criaram os androides supremos: Gamma 1 e Gamma 2. Estes dois androides - que se intitulam \"super-heróis\" - decidem atacar Piccolo e Gohan! Qual será o objetivo do Novo Exército Red Ribbon? Quando o perigo é iminente, é então que desperta o Super-Herói!",
      "streaming":{
         "flatrate":[
            {
               "display_priority":1,
               "logo_path":"/dQeAar5H991VYporEjUspolDarG.jpg",
               "provider_id":119,
               "provider_name":"Amazon Prime Video"
            },
            {
               "display_priority":11,
               "logo_path":"/mXeC4TrcgdU6ltE9bCBCEORwSQR.jpg",
               "provider_id":283,
               "provider_name":"Crunchyroll"
            }
         ],
         "link":"https://www.themoviedb.org/movie/610150/watch?locale=BR"
      },
      "titulo":"Dragon Ball Super: Super Hero"
   },
   {
      "cast":[
         {
            "id":90496,
            "imagem":"/jxbXdejmPoiKnNoQz7Dkb80qC26.jpg",
            "nome":"Masako Nozawa"
         },
         {
            "id":124478,
            "imagem":"/12lHLihOdJm6AmAhRLNOLbeTfqn.jpg",
            "nome":"久川綾"
         },
         {
            "id":122501,
            "imagem":"/1fiJvPrzz8Fqsjr5DVQclGojxO5.jpg",
            "nome":"Ryo Horikawa"
         },
         {
            "id":85286,
            "imagem":"/zZjO0NxIbEhYW3507gXVnvWeRkG.jpg",
            "nome":"古川登志夫"
         },
         {
            "id":1686,
            "imagem":"/gDiYLUdl9zXXJmhE0bAuB1Jm3FJ.jpg",
            "nome":"草尾毅"
         },
         {
            "id":115305,
            "imagem":"/mStyRuTHrJlvPbWamnJHLwRmSOG.jpg",
            "nome":"中尾隆聖"
         },
         {
            "id":20664,
            "imagem":"/biov5jENp2XYfehkcdnRvi796Wi.jpg",
            "nome":"山寺宏一"
         },
         {
            "id":78402,
            "imagem":"/2INsHYbx9gEhhzXPHdqBDdvHjFt.jpg",
            "nome":"Masakazu Morita"
         },
         {
            "id":126690,
            "imagem":"/fk3ebYlTjILTXkzJNvOi3SRUNb6.jpg",
            "nome":"大友龍三郎"
         },
         {
            "id":554432,
            "imagem":"/stuUwLrSOmQhOmNpO4kCrlu3ALF.jpg",
            "nome":"Katsuhisa Houki"
         },
         {
            "id":122192,
            "imagem":"/wgX2xT2y21Tv0eKIMSyMXf6CC0U.jpg",
            "nome":"渡辺菜生子"
         },
         {
            "id":122481,
            "imagem":"/qiXnKaZheMiVyA1U2mX9tPdNA3T.jpg",
            "nome":"Banjo Ginga"
         },
         {
            "id":105816,
            "imagem":"/mF5YJxApTYKBVFJDrEC9IrJ5ooV.jpg",
            "nome":"千葉繁"
         },
         {
            "id":126704,
            "imagem":"/e8qQL1NKTHP8eOsZmV5LCkdHS9T.jpg",
            "nome":"稲田徹"
         },
         {
            "id":24651,
            "imagem":"/1h4C1kz8mziHmiB91MliTDHwgoh.jpg",
            "nome":"Nana Mizuki"
         },
         {
            "id":144655,
            "imagem":"/cv5zuPZySNsHXu24pjKLYCRzJ2J.jpg",
            "nome":"Tomokazu Sugita"
         },
         {
            "id":112135,
            "imagem":"/K04o1MqKbw5Vxjwe2WoKKCsrcV.jpg",
            "nome":"菊池正美"
         },
         {
            "id":1241603,
            "imagem":"/rPP0jCjtLuEEroY3e2aRT8zonYK.jpg",
            "nome":"斉藤貴美子"
         },
         {
            "id":1769320,
            "imagem":"/zqAjvHaRLExteld2UxGy4t7liHC.jpg",
            "nome":"森下由樹子"
         },
         {
            "id":1037692,
            "imagem":"/tDtATZ0RzxPiEzs4X2wJU7rSlkq.jpg",
            "nome":"桐本拓哉"
         }
      ],
      "genero":[
         {
            "id":28,
            "name":"Ação"
         },
         {
            "id":878,
            "name":"Ficção científica"
         },
         {
            "id":16,
            "name":"Animação"
         }
      ],
      "id":503314,
      "mediaVotos":7.898,
      "numVotos":2891,
      "poster":"/tuay76gZt7kOIb806hTzIktsQDT.jpg",
      "sinopse":"Esta é a história de um novo Saiyajin. A Terra está em paz depois do fim do Torneio do Poder. Goku não quer nada além de treinar, já que agora compreende quantas pessoas fortes existem nos universos que ele ainda não conheceu. Então, um dia, um Saiyajin desconhecido chamado Broly aparece diante de Goku e Vegeta. Como é possível que um Saiyajin esteja na Terra quando ele deveria ter sido destruído junto com o Planeta Vegeta? De volta do inferno mais uma vez, Freeza também aparece e os três Saiyajins que tiveram caminhos completamente diferentes se encontram em um intenso conflito.",
      "streaming":{
         
      },
      "titulo":"Dragon Ball Super: Broly"
   }
]
```
resposta
```json
[34433, 39106, 39107, 39108, 89636, 610150, 28609, 24752, 303857, 503314, 126963, 39323, 44251, 120475, 39101]
```



## Notas

* A resposta é um array com os ids dos filmes, pois assim a resposta sai mais rápido.
* A quantidade de elementos na resposta e o tempo de resposta podem ser ajustados no backend, variando bastante o nível da recomendação e tempo de processamento
