### ms_20242_g3
Repositório definido para a manutenção do controle de versão dos artefatos do projeto de do Grupo 3, da Disciplina de Modelagem de Software, no semestre 2024-2.

### Nome do Projeto: 
KlimaX

### Descrição: 
Nosso projeto será uma plataforma online de recomendação de filmes, focada em oferecer sugestões personalizadas com base nos gostos e preferências do usuário. A plataforma permitirá a busca de filmes por meio da seleção de tags, proporcionando uma forma interativa e precisa de filtrar resultados. Além disso, contará com opções de recomendações totalmente aleatórias para quem deseja explorar novos conteúdos de forma descompromissada, e também permitirá sugerir filmes semelhantes a um ou mais títulos selecionados pelo usuário.


### Problema:
Atualmente, apesar da abundância de plataformas de streaming e comunidades sobre filmes, muitos usuários ainda enfrentam dificuldades em encontrar recomendações que realmente atendam aos seus gostos pessoais. A maioria dessas plataformas utiliza algoritmos de recomendação baseados principalmente em dados como o histórico de visualizações, popularidade, e avaliações gerais dos filmes, o que muitas vezes resulta em recomendações genéricas e repetitivas.

O problema central é que essas plataformas geralmente não capturam detalhes mais profundos sobre os gostos individuais. Por exemplo, um usuário pode gostar de filmes de aventura, mas preferir narrativas que tenham personagens complexos ou cenários contemporâneos em vez de produções de época. Um sistema de recomendação eficaz deveria entender preferências sutis como a aversão a filmes do século XX, o gosto por enredos mais atuais ou um interesse por temas específicos, como comédias leves ou protagonismo feminino.

Além disso, as recomendações muitas vezes não levam em conta o estado emocional ou o contexto do usuário no momento da escolha. Um dia, alguém pode querer um filme leve e descontraído, enquanto em outro momento pode preferir algo mais reflexivo ou emocionante. Sem considerar essas variações, as plataformas perdem a chance de oferecer uma experiência personalizada e dinâmica.


### Objetivos da Solução
Descrever os objetivos da solução

### Grupo
Este projeto será desenvolvido pelos componentes do grupo 3:

|Matrícula|Nome|Usuário Git|
|---|---|---|
|202403076|ISADORA YASMIM DA SILVA|[isadora-yasmim](https://github.com/isadora-yasmim)|
|202400913|ANA LUÍSA PEREIRA DOS SANTOS|[AnaLuisaPS07](https://github.com/AnaLuisaPS07)|
|202403083|LUIS VITTOR FERREIRA NUNES|[LuisVittor](https://github.com/LuisVittor)|
|202403087|MATHEUS FAGUNDES SOARES|[FagundesMatheus](https://github.com/FagundesMatheus)|
|202403079|KESLEY SOARES DA SILVA|[Noktowl](https://github.com/Noktowl)|

### Backlog do Produto

1. RF001 - <Sistema de cadastro e autenticação de usuários.>.
2. RF002 - <Integração com APIs externas para catalogação de filmes.>.
3. RF003 - <Função para recomendar filmes com base em critérios(filtros) escolhidos pelo usuário - seleciona os filmes pertencentes àquela união e aleatoriamente escolhe um dentre eles.>.
4. RF004 - <Função para recomendar filmes de forma completamente aleatória.>.
5. RF005 - <Função para recomendar filmes que mais se aproximam dos filmes selecionados pelo usuário - ele escolhe X filmes, com base na intersecção dos traços desses X filmes, a ferramenta escolhe o que atende mais fielmente esse conjunto de características.>.
6. RF006 - <Descrição do Requisito>.

### Requisitos Não Funcionais

1. RNF001 - Usabilidade: <Interface intuitiva e amigável para facilitar a navegação.>.
2. RNF002 - Segurança: <Descrição do Requisito não Funcional>..
3. RNF003 - Desempenho: <Respostas rápidas nas buscas e recomendações (Ex: tempo de resposta menor que 2 segundos)>..
4. RNF004 - Confiabilidade: <Descrição do Requisito não Funcional>.
5. RNF005 - Manutenibilidade: <Código bem estruturado e documentado para facilitar futuras manutenções e expansões.>.
6. RNF006 - Portabilidade: <Descrição do Requisito não Funcional>.
7. RNF007 - Conectividade: <Descrição do Requisito não Funcional>.
8. RNF007 - Escalabilidade: <Capacidade de suportar aumento de usuários e dados sem perda de performance.>.

### Regras de Negócio
1. RN01 - <Atender as diretrizes da LGPD>.
2. RN02 - <Descrição da Regra de Negócio>.
3. RN03 - <Descrição da Regra de Negócio>.
4. RN04 - <Descrição da Regra de Negócio>.
5. RN05 - <Descrição da Regra de Negócio>.

### Modelo Arquitetural
<Apresentar uma descrição sucinta do modelo arquitetural do Produto.>

### Modelo de Interfaces Gráficas
<Apresentar uma descrição sucinta do modelo de interfaces gráficas do Produto.>

### Tecnologia de Persistência de Dados
<Apresentar uma descrição sucinta do modelo de persistência do Produto.>

### Local do _Deploy_


### Cronograma de Desenvolvimento

|Iteração|Descrição|Data Início|Data Fim|Responsável|Situação|
|---|---|---|---|---|---|
|1|Função para buscar filmes e exibir informações importantes(HU-008)|24/09/2024|29/9/2024|Matheus|Concluída✅|
|2|Função de busca personalizada(HU-009) e função de busca por texto(HU-006)|1/10/2024|8/10/2024|Grupo|Programada|
|3|Função de recomendação por tags(HU-001)|9/10/2024|15/10/2024|Grupo|Programada|
|4|Função de recomendação aleatória(HU-002) |12/10/2024|25/10/2024|Grupo|Programada|
|5|Função de recomendação com base em um filme selecionado(HU-003)|26/10/2024|08/11/2024|Grupo|Programada|
|6|Função de cadastro(HU-004) e login(HU-)|09/11/2024|22/11/2024|Grupo|Programada|

### Iterações x Atividades
|Iteração|Tarefa|Data Início|Data Fim|Responsável|Situação|
|---|---|---|---|---|---|
|1|Definição do grupo de trabalho|01/09/2024|03/09/2024|Grupo|Concluída✅|
|1|Definição do Tema do Trabalho|01/09/2024|03/09/2024|Grupo|Concluída✅|
|2|Definição do Backlog do produto|10/09/2024|10/09/2024|Grupo|Concluída✅|
|2|Especificação das histórias de usuário|13/09/2024|24/09/2024|Grupo|Concluída✅|
|2|Distribuição dos itens do backlog entre as iterações|24/09/2024|1/10/2024|Grupo|Concluída✅|
|2|Função para buscar filmes e exibir informações importantes(HU-008)|24/09/2024|29/9/2024|Matheus|Concluída✅|
|3|Função de busca personalizada(HU-009) e função de busca por texto(HU-006)|1/10/2024|8/10/2024|Grupo|Programada|
|4|Função de recomendação aleatória(HU-002) |12/10/2024|25/10/2024|Grupo|Programada|
|5|Função de recomendação com base em um filme selecionado(HU-003)|26/10/2024|08/11/2024|Grupo|Programada|
|6|Função de cadastro(HU-004) e login(HU-)|09/11/2024|22/11/2024|Grupo|Programada|
|7|Apresentação do Projeto|07/12/2024|20/12/2024|Grupo|Programada|

* Implementação se aplicará, se os itens da iteração em andamento, forem eleitos para validação do projeto do trabalho.




