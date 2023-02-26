<template>
  <div class="container">
    <div>
      <h1>
        <span style="display: block; color: yellow"
          >Um pequeno entusiasta na programação.</span
        >
        Dedicando meu tempo a programação. Com grande vontade de aprender sobre
        diversas áreas e tecnologias, na qual estou aberto também a me dedicar,
        no entanto agora meu principal foco esta no
        <span style="color: yellow">Javascript</span>, com o ambiente de
        execução <span style="color: yellow">node.js</span>.
      </h1>
      <br />
      <h1>
        Afim de me manter constantemente aprendendo, e acima de tudo sempre
        poder colaborar positivamente.
      </h1>

      <div class="skills" style="margin-top: 30px">
        <h2>Tecnologias:</h2>
        <div style="padding: 25px 0 25px 0">
          <img
            src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
            alt=""
          />
          <img
            src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
            alt=""
          />
          <img
            src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"
            alt=""
          />
          <img
            src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
            alt=""
          />
          <img
            src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
            alt=""
          />
          <img
            src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"
            alt=""
          />
          <img
            src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white"
            alt=""
          />

          <img
            src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101"
            alt=""
          />
          <img
            src="https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white"
            alt=""
          />
          <img
            src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white"
            alt=""
          />
          <img
            src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
            alt=""
          />
        </div>

        <h2>Banco de dados:</h2>
        <div style="padding: 25px 0 25px 0">
          <img
            src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
            alt=""
          />
          <img
            src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
            alt=""
          />
          <img
            src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
            alt=""
          />
          <img
            src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white"
            alt=""
          />
        </div>
        <h1 style="padding: 25px 0 25px 0">Projetos</h1>
        <h2>
          Algums de meus projetos em destaque, se por interesse, você pode ver
          todos outros em meu Git Hub.
        </h2>
        <div class="card-container">
          <div class="card" style="background-color: #1b1e2e">
            <h2>Spotify API</h2>
            <p>
              API criada em Node.js com o uso do express e mongodb que tem o
              foco na utilização da API do spotify para cadastrar, encontrar,
              curtir, gerar playlists utilizando do que e disponivel por eles.
            </p>
            <a href="https://github.com/vitinhos67/spotify_api" target="_blank"
              >Ir para o repositório</a
            >
          </div>
          <div class="card" style="background-color: #1b1e2e">
            <h2>Chat Online</h2>
            <p>
              Uma API que disponibiliza a conexão bidirecinal com o objetivo de
              tornar possivel a comunicação entre dois clientes.
            </p>
            <a
              href="https://github.com/vitinhos67/online_chat-back-end"
              target="_blank"
              >Ir para o repositório</a
            >
          </div>
          <div class="card" style="background-color: #1b1e2e">
            <h2>OfertaCar</h2>
            <p>
              A ideia da API e reunir diversos anuncios de automoveis em um
              unico lugar de forma que o cliente possa analisar as melhores
              ofertas. API sendo construida em Nest.js (Em desenvolvimento)
            </p>
            <a
              href="https://github.com/vitinhos67/search-car-prices"
              target="_blank"
              >Ir para o repositório</a
            >
          </div>
          <div class="card" style="background-color: #1b1e2e">
            <h2>Sistema de jogos</h2>
            <p>
              API construido em Nest.js seguindo os padrões de uma arquitetura
              monolitica. O projeto e um sistema de jogos capaz de cadastrar
              jogadores, desafia-los entre si
            </p>
            <a
              href="https://github.com/vitinhos67/sistema-de-jogos-nestjs"
              target="_blank"
              >Ir para o repositório</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
:root {
  --color-text: #b8becc;
  --color-h1-text: #ffffff;
}

* {
  margin: 0%;
  padding: 0%;
}

p {
  text-align: left;
}

h1 {
  color: var(--color-h1-text);
  font-size: clamp(1.75em, 1em + 3vw, 2.5em);
}

.container {
  width: 1000px;
  padding-top: 20px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 100px;
}

.description {
  font-size: 25px;
  padding-top: 10px;
}

.badges {
  width: 130px;
}

.skills img {
  padding-left: 5px;
}

.social-icons-link {
  width: 50px;
  padding-top: 10px;
  padding-left: 15px;
  filter: invert(1);
}

.p-default {
  font-size: 19px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #0e1019;
  padding: 20px;
}

.card {
  width: 45%;
  margin: 10px;
  color: #fff;
  border: 1px solid black;

  text-align: center;
  padding: 20px;
  border-radius: 5px;
}

.card h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.card p {
  font-size: 1em;
  margin-bottom: 20px;
}

.card a {
  display: inline-block;
  font-size: 1em;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border-radius: 5px;

  text-decoration: none;
}

.card a:hover {
  transition: all 0.2s ease-in-out;
  background-color: #fff;
  color: black;
}

@media screen and (max-width: 800px) {
  .card {
    width: 45%;
  }
}

@media screen and (min-width: 800px) and (max-width: 1000px) {
  .container {
    padding-left: 20px;
    width: 800px;
  }
}

@media screen and (max-width: 600px) {
  .container {
    padding-left: 10px;
  }

  .card {
    width: 90%;
  }
}

@media screen and (min-width: 700px) and (max-width: 799px) {
  .container {
    width: 500px;

    margin-bottom: 100px;
  }
}

@media screen and (min-width: 600px) and (max-width: 699px) {
  .container {
    width: 500px;
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 15px;
  }

  .card {
    width: 90%;
  }
}

@media screen and (min-width: 500px) and (max-width: 599px) {
  .container {
    width: 350px;
  }
}

@media screen and (min-width: 400px) and (max-width: 499px) {
  .container {
    width: 400px;
  }
}

@media screen and (min-width: 300px) and (max-width: 399px) {
  .container {
    width: 350px;
    margin-bottom: 50px;
  }
}

@media screen and (max-width: 299px) {
  .container {
    padding: 0px;
    width: 250px;
    margin-bottom: 340vh;
  }
}
</style>
