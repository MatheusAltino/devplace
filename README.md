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
    - Develop {id, name, email, password, bio, website, projects[] }
        - Registro
        - Login

    - Projeto {id, name, stack, description, link}
        - cadastro de projeto
        - update de projeto
        - listagem de projeto
        - mostragem de projeto

    - autenticação via jwt
        - middleware de restrição de acesso às informações caso não esteja logado

- Frontend
    - Login
        - registro
        - login

    - Produto
        - cadastro de projeto
        - listagem de projeto
        - mostragem de projeto
        - update de projeto


- Apresentação
    - repositório GIT
    - README com informações de como baixar, instalar e utilizar o sistema


## Execução do Projeto

- Requisitos
    - nodejs instalado na máquina

    - gerenciador de pacotes NPM

    - docker desktop com compose para rodar os containers configurados no docker-compose

- Possíveis problemas

    - Necessidade de configurar o arquivo data-source.ts, com ele o banco de dados se conecta com o container docker.

    - Alguma incompatibilidade de portas entre o docker e a máquina, para isso basta configurar o arquivo docker-compose.yml

- Principais Comandos

    - git-clone https://github.com/MatheusAltino/devplace.git . {Clona o repositório no GitHub}

    - npm i {Instala as dependencias do projeto}

    - docker-compose up -d {Sobe os containers configurados em docker-compose.yml}
    
    - npm run dev {Start na api, o npm start tem apresentado conflito de portas, apesar de ser o mesmo código que o dev}
