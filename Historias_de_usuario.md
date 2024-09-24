# **Histórias de Usuário**

### **ID:**
HU-001

### **Título:**
Recomendar filmes com base nos critérios do usuário

### **Descrição:** 
Como **usuário**, eu quero **poder selecionar critérios (como gênero, classificação, duração, ano, elenco etc)** para que **o sistema recomende filmes de acordo com as minhas seleções, permitindo que eu escolha um filme que se adeque ao meu gosto.**

### **Critérios de Aceitação:**

#### Cenário 1: Recomendações com filtros de critérios
- **Dado** que o usuário está na tela de recomendações,
- **Quando** selecionar os filtros desejados (gênero, classificação, duração, ano, etc.),
- **E** clica em "Buscar",
- **Então** o sistema deve exibir uma lista de filmes que correspondem aos critérios.

#### Cenário 2:  Filtros sem resultados
- **Dado** que o usuário selecionou filtros muito específicos (por exemplo, um filme com uma duração muito específica, de tal ano e com o ator x),
- **E** clicou em buscar
- **Então**  nenhum filme é encontrado, e o sistema deve exibir uma mensagem informando que não há filmes disponíveis com base nos critérios selecionados.

#### Cenário 3 : ?

### **Prioridade:** 
Alta

### **Estimativa de Esforço:** 
??

### **Dependências:**
- Integração do algoritmo de recomendação com o banco de dados(api?) que contém os filmes.

### **Notas/Comentários Adicionais:**


<hr style="width: 80%; height: 2px; background-color: black; border: none;">


### **ID:** 
HU-002
 
### **Título:** 
Recomendação de um filme de maneira aleatória
 
### **Descrição:** 
Como **usuário não cadastrado**, eu quero **ir até a aba de recomendações aleatórias** para que **ao clicar no botão "me surpreenda"(nome passível de alterações) um filme me seja indicado**.
 
### **Critérios de Aceitação:**

#### Cenário 1: Filme recomendado satisfaz o usuário
- **Dado** que o usuário está na página de recomendação aleatória,
- **Quando** o usuário clica no botão "me surpreenda"(nome passível de alterações),
- **Então** um filme é indicado.
 
#### Cenário 2: Filme recomendado não satisfaz o usuário
- **Dado** que o usuário está na página de recomendação aleatória,
- **Quando** o usuário clica no botão "me surpreenda"(nome passível de alterações),
- **Então** um filme é indicado
- **E** o usuário clica no botão "já assisti esse filme"(nome passível de alterações),
- **Então** um filme é indicado.
 
#### Cenário 3: Falha na recomendação
- **Dado** que o usuário está na página de recomendação aleatória,
- **Quando** o usuário clica no botão "me surpreenda"(nome passível de alterações),
- **E**ocorre uma falha na indicação do filme ,
- **E** a mensagem "erro na recomendação" aparece na tela,
- **E** o usuário clica novamente no botão "me surpreenda"(nome passível de alterações),
- **Então** um filme é indicado.
 
### **Prioridade:** 
Alta
 
### **Estimativa de Esforço:** 
??
 
### **Dependências:** 
- Integração com uma API que contenha a base dados dos filmes.
- Desenvolvimento da interface inicial da plataforma.
 
### **Notas/Comentários Adicionais:**
- Quando um filme é recomendado sua ficha técnica e uma imagem que o represente(possivelmente a capa) devem aparecer na tela
- No caso de o usuário ser cadastrado, ao clicar em "já assisti esse filme"(nome passível de alterações) o filme assistido será adicionado ao seu perfil para que não seja recomendado novamente.

<hr style="width: 80%; height: 2px; background-color: black; border: none;">

### **ID:** 
HU-003
 
### **Título:** 
Recomendação de filmes que mais se aproximam dos filmes selecionados pelo usuário
 
### **Descrição:** 
Como **usuário não cadastrado**, eu quero **ir até a aba de recomendações com base em um ou mais filmes escolhidos** para que **ao selecionar os filmes que me interessam uma indicação seja feita**.
 
### **Critérios de Aceitação:**

#### Cenário 1: Usuário seleciona um filme
- **Dado** que o usuário está na página de recomendação com base em um ou mais filmes escolhidos,
- **Quando** o usuário seleciona um filme que o interessa,
- **E** o usuário clica no botão "me recomende um filme"(nome passível de alterações),
- **Então** o filme que mais se aproxima do selecionado é indicado.
 
#### Cenário 2: Usuário seleciona dois ou mais filmes
- **Dado** que o usuário está na página de recomendação com base em um ou mais filmes escolhidos,
- **Quando** o usuário seleciona dois ou mais filmes que o interessam,
- **E** o usuário clica no botão "me recomende um filme"(nome passível de alterações),
- **E** as características que os filmes selecionados tem em comum são comparadas com outros filmes da base de dados,
- **Então** o filme que mais se aproxima dos selecionados é indicado.
 
#### Cenário 3: Falha na recomendação
- **Dado** que o usuário está na página de recomendação com base em um ou mais filmes escolhidos,
- **Quando** o usuário seleciona um ou mais filmes que o interessam,
- **E** o usuário clica no botão "me recomende um filme"(nome passível de alterações),
- **E**ocorre uma falha na indicação do filme ,
- **E** a mensagem "erro na recomendação" aparece na tela,
- **E** o usuário seleciona novamente os filmes que o interessam,
- **Então** o filme que mais se aproxima do(s) selecionado(s) é indicado.

#### Cenário 4: Filme recomendado não satisfaz o usuário
- **Dado** que o usuário está na página de recomendação com base em um ou mais filmes escolhidos,
- **Quando** o usuário seleciona um ou mais filmes que o interessam,
- **E** o usuário clica no botão "me recomende um filme"(nome passível de alterações),
- **Então** o filme que mais se aproxima do(s) selecionado(s) é indicado
- **E** o usuário clica no botão "já assisti esse filme"(nome passível de alterações),
- **Então** outro filme que também se aproxima do(s) selecionado(s) é indicado.
 
### **Prioridade:** 
Alta
 
### **Estimativa de Esforço:** 
??
 
### **Dependências:** 
- Integração com uma API que contenha a base dados dos filmes.
- Desenvolvimento da interface inicial da plataforma.
 
### **Notas/Comentários Adicionais:**


