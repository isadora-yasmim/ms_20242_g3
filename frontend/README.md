# Organização das páginas

Para não gerar conflito e ficar tudo organizado, os arquivos das novas páginas deve estar da seguinte forma especificada abaixo.

## Elementos usados na página

Os elementos usados na página devem ser guardados na pasta "elements". Assim, caso vá usar algum elemento já existente, basta importá-lo; caso vá criar um novo, basta criar uma pasta com o nome do elemento dentro da pasta "elements" e adicioná-lo lá.

## Páginas completas

As páginas já prontas devem ficar na página components.

## Arquivos App e Index .tsx

Esses arquivos são a estrutura de todo o site, organizando as páginas e criando rotas para elas.
O App.tsx devem ser usado para definir as rotas as páginas. Nele está definido a página padrão que deve ser carregada - a HomePage.
As outras páginas serão acessadas através do link que será usado nos elementos da HomePage.

### Estrutura de elementos no projeto

projeto-react/


├── .github/

├── node_modules/ 

├── public/                          \__ Arquivos estáticos (ícones, imagens, etc.)

│   ├── index.html                   \__ Página inicial do projeto

│   ├── favicon.ico                  \__ Ícone do projeto

├── src/                  

│   ├── components/                  \__ Arquivos com a página já montada

│   │   ├── homepage.tsx

│   │   ├── similarfilmsPage.tsx

│   │   └── ...

│   ├── elements/                    \__ Elementos usados nas páginas

│   │   ├── footer/

│   │   │   ├── footer.tsx

│   │   │   ├── footer.css

│   │   │   └── ... 

│   │   └── ...
│   ├── App.tsx                      \__ Componente principal - onde definimos as rotas(caminhos para as páginas) e a rota padrão(que é a homepage)

│   ├── index.tsx                    \__ arquivo que renderiza o site(só deve ter um arquivo que renderiza, podem ter outros index, mas apenas para 

│   └── ...                             exportação de componentes ou páginas.

│   └── ...
├── .gitignore             \__ Arquivos ignorados pelo Git - adicionar o que não deve subir para o projeto

├── package.json           \__ Dependências e scripts do projeto - não é necessário mexer, geralmente

├── README.md              \__ Documentação do projeto

└── tsconfig.json          \__ Configuração do TypeScript

