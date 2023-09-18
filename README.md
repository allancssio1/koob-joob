<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->



<br />
<div align="center">
  <h3 align="center">Allan Cássio - Koob Job</h3>

  <p align="center">
   Um projeo solicitado pela equipe tecnica da Koob Job.
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

Conceito: A possibilidade de criar usuário para uma ree social, onde um usuário pode cadatrar uma postagem, edita-la ou deleta-la.


### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)&nbsp;
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)&nbsp;
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)&nbsp;
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)&nbsp;
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)&nbsp;
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)&nbsp;


<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

Tecnologias usadas para este projeto.
* npm
```sh
npm -v ^8.0.0
```

* Node
```sh
node -v ^16.0.0
```

* Nest
```sh
nest -v ^9.0.0
```
* Docker
``` sh
docker -v ^24.0.0
```

* Docker compose
``` sh
docker compose version ^2.0.0
```

### Installation

Siga estes passos para conseguir rodar o projeto.

1. Clone o repositório
   ```sh
   git clone https://github.com/allancssio1/Allan-Cassio_Sitcon.git
   ```

2. No terminal entre na pasta
   ```sh
   cd koob-joob/
   ```

3. Instale as depentencias com NPM 
   ```sh
   npm install
   ```
4. Gerar imagem do banco de dados
   ```sh
   docker compose up -d
   ```
5. Gerar banco de dados do prisma
  ```sh
  npx prisma generate
  ```
6. Rode a api do projeto em cada um dos terminais
   ```sh
   npm run start:dev
   ```
7. Acesse pelo Insomnia ou Postman
   ```sh
   http://localhost:3000
   ```


### Rotas

Rotas para utilização dessa api.

#### Usuários

* Criação
 ```sh
 Metodo: Post
 Rota: 'user/'
 Body: {
   name: Obrigatório,
   email: Obrigatório,
   password: Obritatório,
   bio: Opcional,
   birthDate: Opcional
 }
 ```

* Login (Necessário para fazer outras funções das rotas que precisará do token gerado no login)
 ```sh
 Metodo: Post
 Rota: '/login'
 Body: {
   email: Obrigatório,
   password: Obritatório,
 }
 ```

* Atualizar dados (Necessário do token gerado no login)
```sh
 Metodo: Put
 Rota: 'user/:id'
 Body: {
   name: Opctional,
   bio: Opcional,
   birthDate: Opctional
 }
 ```

* Buscar um usuário específico (Necessário do token gerado no login)
```sh
 Metodo: Get
 Rota: 'user/:id'
 Body: Não obrigatório
 ```

* Buscar vários usuários
```sh
 Metodo: Get
 Rota: 'user/'
 Body: Não obrigatório
 ```

* Deletar usuário (Necessário do token gerado no login)
```sh
 Metodo: Delete
 Rota: 'user/:id'
 Body: Não obrigatório
 ```

#### Posts

** Token é necessário para essas rotas com excessão de buscar todos os posts.

* Criação postagem
 ```sh
 Metodo: Post
 Rota: 'posts/'
 Body: {
   content: Obrigatório,
 }
 ```

* Atualizar conteúdo da postagem
```sh
 Metodo: Put
 Rota: 'posts/:id'
 Body: {
   content: Opctional,
 }
 ```

* Buscar uma postagem específico
```sh
 Metodo: Get
 Rota: 'posts/:id'
 Body: Não obrigatório
 ```

* Buscar várias postagens (não necessita de token)
```sh
 Metodo: Get
 Rota: 'posts/'
 Body: Não obrigatório
 ```

* Buscar várias postagens de um usuário
```sh
 Metodo: Get
 Rota: 'posts/find/user'
 Body: Não obrigatório
 ```

* Deletar postagem
```sh
 Metodo: Delete
 Rota: 'posts/:id'
 Body: Não obrigatório
 ```




<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.