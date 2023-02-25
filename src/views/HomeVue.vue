<template>
  <div class="container">
    <div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odit
        doloremque repellendus consequuntur, in officiis. Beatae, reiciendis
        veritatis excepturi amet magni, hic deserunt ipsa quas ab earum,
        dignissimos tenetur? Accusantium? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Repellendus ducimus cumque facilis! Voluptatem, eos.
        Amet beatae dolorum sunt? Consectetur, quae! Architecto aliquid iusto
        ut, culpa necessitatibus iste nobis sunt vitae! Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Cumque ex qui assumenda laboriosam
        sunt doloribus. Laudantium dolorum eligendi totam nemo facilis autem,
        veniam sunt, quos eveniet similique pariatur quae assumenda?
      </h1>

      <h2 style="padding: 25px 0 25px 0">Algumas de minhas qualificações</h2>

      <div class="skills">
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
          Algums de meus projetos em destaque, se por interesse você pode ver
          todos outros em meu github
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
              Uma API que disponibiliza a conexão unidirecinal com o objetivo de
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
}

.container {
  width: 1000px;
  padding-top: 20px;
  padding-left: 20px;
  height: 1000px;
  margin: 0 auto;
  margin-bottom: 700px;
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

.default-break-line {
  word-wrap: break-word;
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
@media screen and (max-width: 600px) {
  .card {
    width: 90%;
  }
}

@media screen and (min-width: 800px) and (max-width: 1200px) {
  .container {
    width: 100%;
    float: none;
    background-color: #0e1019;
    height: 1100px;
  }

  .description {
    font-size: 22px;
    padding-top: 10px;
  }
}

@media screen and (min-width: 700px) and (max-width: 799px) {
  .container {
    width: 500px;
    height: 1350px;

    margin-bottom: 1300px;
  }
}

@media screen and (min-width: 600px) and (max-width: 699px) {
  .container {
    width: 500px;
    height: 1450px;

    margin-bottom: 1150px;
  }
}

@media screen and (min-width: 500px) and (max-width: 599px) {
  .container {
    padding: 10px 0px 0px 12px;
    width: 350px;

    height: 1900px;
    font-size: 18px;
    margin-bottom: 340vh;
  }
}

@media screen and (min-width: 400px) and (max-width: 499px) {
  .container {
    padding: 10px;
    font-size: 10px;

    width: 400px;
    height: 1200px;
  }

  .ref-terminal {
    font-size: 18px;
  }

  .description {
    font-size: 18px;
  }
}
@media screen and (min-width: 300px) and (max-width: 399px) {
  .container {
    padding: 5px;
    width: 360px;
    height: 300vh;
  }
  .container span {
    font-size: 18px;
  }

  .ref-terminal {
    font-size: 18px;
  }
}

@media screen and (max-width: 299px) {
  .container {
    padding: 0px;
    width: 250px;
    font-size: 15px;
    margin-bottom: 340vh;
  }

  .ref-terminal {
    font-size: 18px;
  }

  .description {
    font-size: 18px;
  }
}
</style>
