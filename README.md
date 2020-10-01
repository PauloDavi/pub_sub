<h1 align="center">PubSub Server/Client</h1>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/PauloDavi/pub_sub?color=gree">
  <img alt="Linguagem principal" src="https://img.shields.io/github/languages/top/PauloDavi/pub_sub">
  <img alt="License" src="https://img.shields.io/github/license/PauloDavi/pub_sub">
  <img alt="Stargazers" src="https://img.shields.io/github/stars/PauloDavi/pub_sub?style=social">
</p>

<p align="center">
  <a href="#como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>
</p>

# :mailbox_with_mail: PubSub
Aplicação que simula um Publisher e um Subscriber do pubsub que armazenas as mensagens recebidas em um banco mongo

## Como usar
- Clone o repositorio e execute `yarn install` no diretorio ou se usar npm use `npm install`
- Crie um arquivo **.env** e preencha com as informações do arquivo **.env.example**
- Cole o arquivo **key.json** de autenticação do GoogleCloud na raiz
- Execute `yarn dev:server` e `yarn dev:client` ou `npm run dev:server` e `npm run dev:server`

## Funcionalidades
- Criação de mensagens 
- Conecção com o GooglePubSub
- Conecção com o mongo
- Métodos http para listagem e delete de mensagens do mongo
