# **Histórias de Usuário**

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

### **ID:**  
HU-006

### **Título:**  
Catálogo de filmes

### **Descrição:**  
Como **usuário da plataforma**, eu quero **ter acesso a um catálogo de filmes** para que **me sejam recomendados diferentes tipos de filmes através de diversos critérios**.

### **Critérios de Aceitação:**

#### Cenário 1: Catálogo satisfez o usuário  
- **Dado** que o usuário está na página inicial da plataforma,  
- **Quando** o usuário clica no botão "Catálogo" (nome passível de alterações),  
- **Então** diferentes tipos de catálogo de filmes são apresentados para o usuário.

#### Cenário 2: Catálogo não satisfez o usuário  
- **Dado** que o usuário está na página inicial da plataforma,  
- **Quando** o usuário clica no botão "Catálogo" (nome passível de alterações),  
- **Então** diferentes tipos de catálogo de filmes são apresentados para o usuário,  
- **E** o usuário clica no botão "Recarregar Catálogo" (nome passível de alterações),  
- **Então** novos catálogos são apresentados.

#### Cenário 3: Falha no carregamento do catálogo  
- **Dado** que o usuário está na página inicial da plataforma,  
- **Quando** o usuário clica no botão "Catálogo" (nome passível de alterações),  
- **E** ocorre uma falha no carregamento do catálogo de filmes,  
- **E** a mensagem "Erro no carregamento do catálogo" aparece na tela,  
- **E** o usuário clica no botão "Recarregar Catálogo" (nome passível de alterações),  
- **Então** o catálogo de filmes é recarregado.

### **Prioridade:**  
Média

### **Estimativa de Esforço:**  
??

### **Dependências:**  
- Integração com uma API que contenha a base de dados dos filmes.  
- Desenvolvimento da interface inicial da plataforma.

### **Notas/Comentários Adicionais:**  
- Diferentes filmes serão apresentados no catálogo de filmes, sendo representados por uma imagem do filme, priorizando aquelas que apresentam o nome do filme na imagem.  
- Caso o usuário já seja cadastrado, haverá uma pequena alteração na iluminação da imagem do filme para indicar que o usuário já assistiu a determinada obra.  
- Catálogos de filmes premiados e indicações da administração também estarão na plataforma.

---

### **ID:**  
HU-009

### **Título:**  
Filtro para o Catálogo de filmes

### **Descrição:**  
Como **usuário da plataforma**, eu quero **ter acesso a um filtro para o catálogo de filmes** para que **me sejam recomendados diferentes tipos de filmes através de diversos critérios**.

### **Critérios de Aceitação:**

#### Cenário 1: Catálogo satisfez o usuário  
- **Dado** que o usuário está na página do catálogo de filmes,  
- **Quando** o usuário clica no botão "Filtros" (nome passível de alterações),  
- **Então** diferentes filmes que atendem aos filtros são indicados.

#### Cenário 2: Catálogo não satisfez o usuário  
- **Dado** que o usuário está na página do catálogo de filmes,  
- **Quando** o usuário clica no botão "Filtros" (nome passível de alterações),  
- **Então** diferentes filmes que atendem aos filtros são indicados.  
- **E** o usuário clica no botão "Recarregar Catálogo" (nome passível de alterações),  
- **Então** um novo catálogo é indicado.

#### Cenário 3: Falha no carregamento do catálogo  
- **Dado** que o usuário está na página do catálogo de filmes,  
- **Quando** o usuário clica no botão "Filtros" (nome passível de alterações),  
- **E** ocorre uma falha no carregamento do catálogo de filmes,  
- **E** a mensagem "Erro no carregamento do catálogo" aparece na tela,  
- **E** o usuário clica novamente no botão "Filtros" (nome passível de alterações),  
- **Então** um catálogo de filmes é indicado.

### **Prioridade:**  
Média

### **Estimativa de Esforço:**  
??

### **Dependências:**  
- Integração com uma API que contenha a base de dados dos filmes.  
- Desenvolvimento da interface inicial da plataforma.

### **Notas/Comentários Adicionais:**  
- Os filtros serão bem abrangentes, permitindo que o usuário tenha uma gama de possibilidades na hora de procurar um catálogo de filmes.
