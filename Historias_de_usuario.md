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

#### Cenário 3 : Falha ao não selecionar nenhum filtro
- **Dado** que o usuário está na tela de recomendações,
- **Quando** tentar clicar em "Buscar" sem selecionar nenhum filtro,
- **Então** o sistema deve exibir uma mensagem de alerta informando que ao menos um critério precisa ser selecionado,
- **E** o botão de "Buscar" deve permanecer desativado até que ao menos um filtro seja escolhido.
  
### **Prioridade:** 
Alta

### **Estimativa de Esforço:** 
??

### **Dependências:**
- Integração com uma API que contenha a base dados dos filmes.
- Desenvolvimento da interface inicial da plataforma.

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

<hr style="width: 80%; height: 2px; background-color: black; border: none;">

### **ID:**
HU-007

### **Título:**
Editar perfil do usuário

### **Descrição:**
Como **usuário cadastrado**, eu quero **editar as informações do meu perfil**, para que **eu possa manter meus dados pessoais atualizados e personalizar minha experiência na plataforma.**

### **Critérios de Aceitação:**

#### Cenário 1: Atualizar informações básicas
- **Dado** que o usuário acessou a página de perfil,
- **Quando** clicar na opção de "Editar Perfil",
- **Então** o sistema deve permitir a edição de informações como nome, foto de perfil, data de nascimento, e preferências de gênero cinematográfico.
  
#### Cenário 2: Confirmar e salvar alterações
- **Dado** que o usuário editou as informações do perfil,
- **Quando** clicar em "Salvar",
- **Então** o sistema deve validar as informações inseridas,
- **E** exibir uma mensagem de sucesso após a atualização.

#### Cenário 3: Exibir mensagem de erro para dados inválidos
- **Dado** que o usuário inseriu informações inválidas (como data de nascimento incoerente),
- **Quando** clicar em "Salvar",
- **Então** o sistema deve exibir uma mensagem de erro indicando os campos inválidos que precisam ser corrigidos.
  
#### Cenário 4: Cancelar alterações
- **Dado** que o usuário está editando seu perfil,
- **Quando** clicar em "Cancelar",
- **Então** o sistema deve descartar todas as alterações e retornar às informações originais do perfil sem salvá-las.

### Prioridade:
Média

### Estimativa de Esforço:
??

## Dependências:
- Criação de perfil de usuário (História HU-004).
- Banco de dados de usuários armazenando as informações de perfil.
- Desenvolvimento da interface inicial da plataforma.
 
### **Notas/Comentários Adicionais:**

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