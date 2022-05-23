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

    - git clone https://github.com/MatheusAltino/devplace.git . {Clona o repositório no GitHub}

    - npm i {Instala as dependencias do projeto}

    - docker-compose up -d {Sobe os containers configurados em docker-compose.yml}
    
    - npm run dev {Start na api, o npm start tem apresentado conflito de portas, apesar de ser o mesmo código que o dev}

-----------------------------
## Imagens
![createUser](https://user-images.githubusercontent.com/83050247/169723122-a57bf44d-5b57-461f-8249-1cf7decdeb81.png)
![listUsers](https://user-images.githubusercontent.com/83050247/169722620-130b2df0-cf35-4303-921d-8e578a91500a.png)
![auth](https://user-images.githubusercontent.com/83050247/169722777-60a1e7f2-5e72-4bb1-800d-7b1aeac71bf4.png)
![createProject](https://user-images.githubusercontent.com/83050247/169723020-62c74bc7-a278-47a6-a6c4-ce404d119fb9.png)
![listProjects](https://user-images.githubusercontent.com/83050247/169722836-adef1b8a-55ec-49a0-a3b8-c1e8f3bfd665.png)
![updateProject](https://user-images.githubusercontent.com/83050247/169722973-283ac5a6-2f59-4842-aa0f-cc590b125ae9.png)
![deleteProject](https://user-images.githubusercontent.com/83050247/169723268-c11423bc-bfe4-41b6-972b-1261ce5cdba7.png)
