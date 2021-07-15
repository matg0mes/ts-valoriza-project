# Valoriza

<p>
  
  ![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
  ![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
  ![](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
  
</p>

API de elogios para os colegas. Projeto realizado na Next Level Week 6, infelizmente não finalizado com os objetivos da semana indo até a quarta e penultima aula :(

## Sumario

[Como instalar?](#como-instalar)<br/>
[Iniciando a API](#iniciando-a-api)<br/>
[Serviços](#serviços)<br/>
[Migrations](#migrations)<br/>

## Como instalar?

Com node e npm instalado na máquina rode o comando para instalar as dependencias:

```nodejs
    npm install
```

## Iniciando a API

Com node e npm instalado na máquina rode o comando para iniciar o serviço, por padrão o serviço é iniciado na portta 3333, logo em http://localhost:3333:

```nodejs
    npm run dev
```

## Serviços

### **POST /users/session**

Body:

```json
{
  "email": "fgome.matheus@gmail.com",
  "password": "12"
}
```

Exemplo retorno esperado:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZnb21lLm1hdGhldXNAZ21haWwuY29tIiwiaWF0IjoxNjI1MjY1NjU2LCJleHAiOjE2MjUzNTIwNTYsInN1YiI6IjAzMTE4MWNlLWM3NWMtNDg5Ny05NWI1LTEwOWQ1MWFhZDcwOCJ9.KdH7Wsg3MkpAFQmewszRHSvsFdKziIK8WGoSeLMsFnk"
}
```

### **POST /users**

Body:

```json
{
  "name": "matheus gomes",
  "email": "fgome.matheus@gmail.com",
  "admin": true,
  "password": "123"
}
```

Exemplo retorno esperado:

```json
{
  "id": "7c43a063-a116-4aba-ace4-a8d302b9e951",
  "name": "matheus gomes",
  "email": "fgome.matheus@gmail.com",
  "password": "$2a$08$96KXyVmw6afo0rH4xCKWZuUPWAZMXf9Kr.AejIxteM/qtQ/rITMa2",
  "admin": true,
  "created_at": "2021-07-02T22:41:41.000Z",
  "updated_at": "2021-07-02T22:41:41.000Z"
}
```

### **POST /tags**

Body:

```json
{
  "name": "marmelada ruim"
}
```

Exemplo retorno esperado:

```json
{
  "id": "ad7591fb-156c-4ac9-934f-12e4d2d77f9d",
  "name": "marmelada ruim",
  "created_at": "2021-07-02T22:42:37.000Z",
  "updated_at": "2021-07-02T22:42:37.000Z"
}
```

### **POST /tags**

Body:

```json
{
  "user_receiver": "75b85b0a-9e3f-4fbc-9b2f-9945605bcc75",
  "user_sender": "031181ce-c75c-4897-95b5-109d51aad708",
  "tag_id": "820f5a7a-6ede-4efb-a4cd-bcd69b5651b9",
  "message": "Muito maneiro!"
}
```

Exemplo retorno esperado:

```json
{
  "id": "40398acd-80a7-4510-a4a7-ef160b41a962",
  "user_sender": "031181ce-c75c-4897-95b5-109d51aad708",
  "user_receiver": "75b85b0a-9e3f-4fbc-9b2f-9945605bcc75",
  "tag_id": "820f5a7a-6ede-4efb-a4cd-bcd69b5651b9",
  "message": "Muito maneiro!",
  "created_at": "2021-07-02T22:43:07.000Z",
  "updated_at": "2021-07-02T22:43:07.000Z"
}
```

## Testes unitários

Com node e npm instalado na máquina rode o comando para rodar os testes unitários:

```nodejs
    npm run test
```

## Migrations

Migrations é um conceito que nos possibilita compartilhar a estrutura das tabelas entre os desenvolvedores, criando uma camada de prevensão com possíveis conflitos locais.

Com node e npm instalado na máquina rode o comando para rodar as migrations:

```nodejs
    npm run migration:run
```

Revert:

```nodejs
    npm run migration:revert
```

<hr />

<p  align="right">Made with ❤️ by <a href="https://github.com/matg0mes">matg0mes</a>.</p>
