# Desafio Mercado Pago de Back-end


## Sobre o projeto
Este projeto é uma aplicação Back-end, que consiste em integrar com Mercado Pago e utilizar o serviço de criação de pagamento com cartão de crédito e boleto bancário.


## 💻 Tecnologias / Ferramentas:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mercado Pago](https://github.com/mercadopago/sdk-nodejs)
- [Cors](https://github.com/expressjs/cors)
- [TSyringe](https://github.com/Microsoft/tsyringe)


## :electric_plug: Pré-Requisitos:

- [Node.js](https://nodejs.org/en/) >= v16.10.0
- [Visual Studio Code](https://code.visualstudio.com/)
- [Yarn](https://yarnpkg.com/) ou [NPM](https://nodejs.org/en/)
- [Yarn](https://insomnia.rest/)
- Ter conta no [Mercado Pago](https://www.mercadopago.com.br/) para [gerar as credenciais](https://www.mercadopago.com.br/settings/account/credentials) Client ID, Client Secret e Access Token de teste para as integrações.

> Crie uma pasta como o nome que desejar e acesse esse diretório que criou.


**Clone o repositório Front-end**
```
git clone https://github.com/renanjefferson/backend_mercado_pago_challenge.git
```
<br/>

- Entre no diretório `backend_mercado_pago_challenge` e abra o projeto no VSCode
- Digite: yarn install ou npm install (dependendo do gerenciador acima escolhido)
- Crie e configure o arquivo '.env' na raíz do projeto com `CLIENT_ID`, `CLIENT_SECRET` e `ACCESS_TOKEN` da forma como está no arquivo '.env.example'
 ```bash
 CLIENT_ID="<SEU_CLIENT_ID>"
 ```
 ```bash
 CLIENT_SECRET="<SEU_CLIENT_SECRET>"
 ```
 ```bash
 ACCESS_TOKEN="<SEU_TOKEN_DE_ACESSO>"
 ```
 
 
**Rodar a aplicação**
```bash
yarn dev
```
ou
```bash
npm run dev
```


**Local**

Acesse [http://localhost:5000](http://localhost:5000) em seu navegador.

