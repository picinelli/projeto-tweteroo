<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/picinelli/projeto-tweteroo">
    <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f424.svg" alt="Logo" width="100">
  </a>

<h3 align="center">Projeto - Tweteroo</h3>
  <h4 align="center"> 
	🚀 Concluído! 🚀
  </h4>
  <p align="center">
    Construção de uma API destinada à um clone do Twitter
    <br />
    <a href="https://github.com/picinelli/projeto-tweteroo/blob/main/index.js"><strong>Código JS»</strong></a>
</div>

<!-- ABOUT THE PROJECT -->

# Requisitos

- Geral
    - [x]  A porta utilizada pelo seu servidor deve ser a 5000 (isso facilita nossa avaliação 🙂).
    - [x]  Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub.
    - [x]  Faça *commits* a cada funcionalidade implementada.
- Armazenamento de dados
    - [x]  Para persistir os dados (usuários e tweets), utilize variáveis globais em memória.
    - [x]  O formato de um **usuário** deve ser:
        
        ```jsx
        {
        	username: 'bobesponja', 
        	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
        }
        ```
        
    - [x]  O formato de um **tweet** deve ser:
        
        ```jsx
        {
        	username: "bobesponja",
        	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
          	tweet: "eu amo o hub",
        }
        ```
        
    - Repare que a informação “avatar” **não vem** da requisição post do `/tweets`. Você vai precisar obtê-la de outra forma.

- **POST** `/sign-up`
    - [x]  Deve receber (pelo *body* da *request*), um parâmetro **username** e um **avatar**, contendo o nome do username do usuário e a sua foto de avatar:
        
        ```jsx
        {
            username: "bobesponja",
	    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
        }
        ```
        
    - [x]  Salvar esse usuário num array de usuários do servidor
    - [x]  Por fim, retornar a mensagem `“OK”`
- **POST** `/tweets`
    - [x]  Deve receber (pelo *body* da *request*), os parâmetros `username` e `tweet`:
        
        ```jsx
        {
        	username: "bobesponja",
		tweet: "eu amo o hub"
        }
        ```
        
    - [x]  Salvar esse *tweet* num array de *tweets* do servidor.
    - [x]  Por fim, retornar a mensagem `“OK”` .
- **GET** `/tweets`
    - [x]  Retornar os **10 últimos tweets** publicados
        
        ```jsx
        [
        	{
        		username: "bobesponja",
        		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
			tweet: "eu amo o hub"
        	}
        ]
        ```
        

# Bônus (opcional)

- Validação de dados
    - [x]  Todas as rotas deverão validar os dados recebidos, caso algum dado venha vazio ou no formato inválido, o servidor deverá retornar o status code 400 (BAD REQUEST) e não continuará com a execução da função. **Dica:** procure pelo método `res.sendStatus()`.
    - [x]  **POST** `/sign-up` precisa validar se os valores de `username` e `avatar` foram enviados e caso contrário, deverá responder com a mensagem “Todos os campos são obrigatórios!”.
    - [x]  **POST** `/tweets` precisa validar se os valores de `username` e `tweet` foram enviados e caso contrário, deverá responder com a mensagem “Todos os campos são obrigatórios!”.
- Status codes de requisições POST
    - [x]  Todas as requisições POST deverão retornar o status code 201 (CREATED) além do seu retorno já descrito (mensagens, JSONs, etc). **Dica:** procure pelo método `res.status()` e tente utilizá-lo junto do método `res.send()`
- **GET** `/tweets/USERNAME`
    - [x]  Retornar todos os *tweets* publicados do usuário recebido por parâmetro de rota
- **GET** `/tweets` com paginação
    - [x]  Esse endpoint deverá passar a receber a página identificada via query string (`?page=1`). Esse é um recurso diferente do que vimos até agora (route params e body).
    - [x]  Modifique o endpoint para retornar corretamente os tweets da “página” (`page`) atual, esse endpoint será chamado ao clicar no botão “**Carregar mais**” (isso já foi feito no front-end). A primeira página corresponde aos ultimos 10 tweets, a segunda do 11 ao 20, a terceira do 21 ao 30, etc.
    - [x]  Lembre-se de validar se o valor de `page` (query string) foi enviado e tem valor **maior que** 1 e caso contrário, deverá responder com a mensagem “Informe uma página válida!” e com o status code 400 (BAD REQUEST).
- **POST** `/tweets` recebendo username por Header
    - [x]  Esse endpoint deverá parar de receber o valor de username do body e passar a recebê-lo por meio de um header user. Esse é um recurso diferente do que vimos até agora (route params e body).


### Tecnologias Utilizadas
 
![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<!-- CONTACT -->

### Contato

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Mail][mail-shield]][mail-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/pedro-ivo-brum-cinelli//
[mail-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[mail-url]: mailto:cinelli.dev@gmail.com
