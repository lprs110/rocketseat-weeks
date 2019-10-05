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

### Informações

- Métodos utilizados nas rotas: GET, POST, PUT, DELETE
- Argumentos das rotas:
  - `req.query`: Acessar *query params* (para filtros)
  - `req.params`: Acessar *route params* (para edição, delete)
  - `req.body`: Acessar corpo da requisição (para criação, ediçaõ)
- Padrão de funções utilizadas no controller: index, show, store, update, destroy