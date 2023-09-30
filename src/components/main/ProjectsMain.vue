<template>
  <h1 class="color-text main-text">Projetos</h1>
  <p class="text-p color-text">
    Aqui estão projetos que considero terem maior destaque e nos quais adquiri
    mais conhecimento ao desenvolvê-los; qualquer outro pode ser visto em meu
    <a href="https://github.com/vitinhos67?tab=repositories" target="_blank"
      >GitHub</a
    >
  </p>

  <h2 class="text-p color-text">Spotify API</h2>
  <p class="color-text p-date">
    API criada em Node.js com o uso do express e mongodb que tem o foco na
    utilização da API do spotify para cadastrar, encontrar, curtir, gerar
    playlists utilizando do que e disponivel por eles. Ela utiliza Docker para
    criar uma imagem e roda-lá.
  </p>

  <a href="https://github.com/vitinhos67/spotify_api" target="_blank"
    ><button class="btn-redirect-project">Acessar</button></a
  >

  <h2 class="text-p color-text">Order Manager (Gerenciador de Pedidos)</h2>
  <p class="color-text p-date">
    Utilizando Java e Spring, utilizo dos recursos dispostos para se construir
    uma API seguindo os padrões REST e também a programação orientada a objetos
    para disponibilizar serviços através de endpoints. O principal foco está em
    gerenciar/realizar pedidos de uma lanchonete. podendo gerenciar os pedidos e
    serem realizados através da API
  </p>
  <a href="https://github.com/vitinhos67/order_manager" target="_blank"
    ><button class="btn-redirect-project">Acessar</button></a
  >

  <h2 class="text-p color-text">ChatON (Chat online)</h2>
  <p class="color-text p-date">
    Uma API que disponibiliza a conexão bidirecional(WebSocket) com o objetivo
    de tornar possivel a comunicação entre dois clientes através de um chat.
    Utiliza Node.js e Socket.io
  </p>
  <a href="https://github.com/vitinhos67/online_chat-back-end" target="_blank"
    ><button class="btn-redirect-project">Acessar</button></a
  >
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
.color-text {
  color: #4b4d57;
}

.text-p {
  padding: 30px 20px 8px 40px;
}

.main-text {
  font-size: 50px;
  font-family: "Montserrat", sans-serif;
  padding: 30px 20px 8px 40px;
}

.p-date {
  padding-left: 40px;
  font-size: 12px;
}

.btn-redirect-project {
  margin: 10px 0 0 40px;
  padding: 10px 15px 10px 15px;
  color: #ffff;
  transition: background-color 0.4s ease, box-shadow 0.5s ease;
  border-radius: 10px;
  background-color: #8953ff;
}

.btn-redirect-project:hover {
  background-color: #01004c;
  color: #ffffff; /* Altera a cor do texto para branco ao passar o mouse */
}

/* Remove a formatação padrão do link dentro do botão */
.btn-redirect-project a {
  color: inherit;
  text-decoration: none;
}
</style>
