# Mostra os detalhes de um filme específico



**URL** : `https://randomgosling.onrender.com/detalhes/{id}`

**Method** : `GET`

**Exemplo de resposta json**

Para id número 912649:

```json
{
    "cast": [
        {
            "id": 2524,
            "imagem": "/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg",
            "nome": "Tom Hardy"
        },
        {
            "id": 5294,
            "imagem": "/kq5DDnqqofoRI0t6ddtRlsJnNPT.jpg",
            "nome": "Chiwetel Ejiofor"
        },
        {
            "id": 36594,
            "imagem": "/wMpZcKp7zaHnmNQooqbve33577Q.jpg",
            "nome": "Juno Temple"
        },
        {
            "id": 1861573,
            "imagem": "/d24KKFxfoql6PBsBPsejFgzhSlH.jpg",
            "nome": "Clark Backo"
        },
        {
            "id": 7026,
            "imagem": "/1D670EEsbky3EtO7XLG32A09p92.jpg",
            "nome": "Rhys Ifans"
        },
        {
            "id": 1115,
            "imagem": "/hRq4Rq8IbLL4nGCu11N5ePESdI6.jpg",
            "nome": "Stephen Graham"
        },
        {
            "id": 2141479,
            "imagem": "/ng5eaDcOf9kSwIYGNmwF9wEfIHp.jpg",
            "nome": "Peggy Lu"
        },
        {
            "id": 10402,
            "imagem": "/ffyBAEoW3bDgVJQV3GaHsZ9x29W.jpg",
            "nome": "Alanna Ubach"
        },
        {
            "id": 1368479,
            "imagem": "/cVLLrES860YANUMzJUo20HUR7TI.jpg",
            "nome": "Hala Finley"
        },
        {
            "id": 3106475,
            "imagem": "/8WmRoUrM5S7rA0TVSdKGOSh9uq8.jpg",
            "nome": "达什·麦克劳德"
        },
        {
            "id": 2627590,
            "imagem": "/irx5BVVLSQWY9m5NrhqyxPekwIY.jpg",
            "nome": "Cristo Fernández"
        },
        {
            "id": 1333,
            "imagem": "/eNGqhebQ4cDssjVeNFrKtUvweV5.jpg",
            "nome": "Andy Serkis"
        },
        {
            "id": 1011019,
            "imagem": "/3hShByAdCj1Qom9mXeeqJL9zu8d.jpg",
            "nome": "Jared Abrahamson"
        },
        {
            "id": 1346980,
            "imagem": "/mQ3G9nLCLtfcMDEm4Is9zVzwapE.jpg",
            "nome": "Ivo Nandi"
        },
        {
            "id": 1688381,
            "imagem": "/4FD8dFS9usyl4Gv5qha1AbrXNjO.jpg",
            "nome": "Jack Brady"
        },
        {
            "id": 2750967,
            "imagem": "/tsfpEWWuLi0agOInxy43Oxi5cyr.jpg",
            "nome": "Brooke Carter"
        },
        {
            "id": 3090043,
            "imagem": "/lyCBy56im2St8sJXDAFogfrt3XF.jpg",
            "nome": "Fflyn Edwards"
        },
        {
            "id": 81316,
            "imagem": "/kBAeDUDA7XJRXFLGNALlpE5d3lA.jpg",
            "nome": "Reid Scott"
        },
        {
            "id": 1491348,
            "imagem": "/kfS0frsBQT7CtMxRxI2zfvBwTWV.jpg",
            "nome": "Jake Allyn"
        },
        {
            "id": 1736538,
            "imagem": "/sLiGyvLoPmdfaBLM2jyyt8YYcik.jpg",
            "nome": "Otis Winston"
        }
    ],
    "genero": [
        {
            "id": 878,
            "name": "Ficção científica"
        },
        {
            "id": 28,
            "name": "Ação"
        },
        {
            "id": 12,
            "name": "Aventura"
        }
    ],
    "id": 912649,
    "mediaVotos": 6.5,
    "numVotos": 574,
    "poster": "/fTGJWXuFDcRSIVPgQLbxziGquOC.jpg",
    "sinopse": "Eddie e Venom estão fugindo. Perseguidos pelos dois mundos, a dupla é forçada a tomar uma decisão devastadora que vai fechar as cortinas da última rodada de Venom e Eddie.",
    "streaming": {},
    "titulo": "Venom: A Última Rodada"
}
```



## Notas

* A resposta é um dicionário e o ID dos filmes vai ser encontrado por meio dos endpoints que retornam filmes
