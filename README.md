# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

----------------------

## UseCases
Um serviço que conecta desenvolvedores através de exposição de projetos.
Cada desenvolvedor cadastra seus projetos para ser exposto aos demais usuários da aplicação.

- Database
    - mysql

- Backend
    - Develop {id, name, email, password }
        - Registro
        - Login

    - Produto {id, name, description, palavras-chave[], github}
        - cadastro de produto
        - update de produto
        - listagem de produtos
        - mostragem de produto

    - autenticação via jwt
        - middleware de restrição de acesso às informações caso não esteja logado

- Frontend
    - Login
        - registro
        - login

    - Produto
        - cadastro de produto
        - listagem de produtos
        - mostragem de produto
        - update de produto


- Apresentação
    - repositório GIT
    - README com informações de como baixar, instalar e utilizar o sistema