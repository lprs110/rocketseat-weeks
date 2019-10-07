# Guia

## Node JS

Inicializar: `yarn init -y`

- Cria o arquivo `package.json`

### Bibliotecas

- `yarn add express`
  - Biblioteca para trabalhar com rotas
- `yarn add nodemon -D`
  - Atualização em tempo real da aplicação
- `yarn add mongoose`
  - ORM para MongoDB
- `yarn add multer`
  - Biblioteca para trabalhar com upload de arquivos
- `yarn add cors`
  - Permite a interação entre *backend* e *frontend*

### Informações

- Métodos utilizados nas rotas: GET, POST, PUT, DELETE
- Argumentos das rotas:
  - `req.query`: Acessar *query params* (para filtros)
  - `req.params`: Acessar *route params* (para edição, delete)
  - `req.body`: Acessar corpo da requisição (para criação, ediçaõ)
- Padrão de funções utilizadas no controller: index, show, store, update, destroy

## ReactJS

Inicializar: `yarn create react-app app`

### Biblioteca

- `yarn add axios`
  - Biblioteca para trabalhar com requisições HTTPs com APIs
- `yarn add react-router-dom`
  - Biblioteca de rotas

### Informações

- `useState`: salva o estado das variáveis
- `useEffect`: alterações que podem ser feitas na página sem fazer redirecionamento