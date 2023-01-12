<template>
  <div class="container">
      <div class="info-grid">
          <span class="ref-terminal">
              <span class="color-info-user-terminal">victor@victor-A320M-S2H</span>
              <span class="color-path-system-terminal">~/Documents/informacoes$</span>
              <span> head sobre_mim.txt</span>
          </span>

          <div class="info-text">
              <span>
                  Prazer, sou o Victor, meu primeiro contato com computadores vem desde bem novo, no entanto, esse
                  relacionamento se aprimorou quando comecei a trabalhar em uma loja de informatica, em que formatei
                  meu primeiro computador, lá tive contanto com diversas responsabilidades, como trabalhar com
                  atendimento, desenvolver artes com o CorelDraw e outras atividades em gerais. Diante isso, foi
                  possivel eu desenvolver minhas primeiras renponsabilidades profissionais e metas para minha vida
                  pessoal. Hoje, trabalho como chapeiro e também estou estudando para atuar na área de
                  desenvolvimento, o meu principal foco está no ambiente de execução Node.js.
              </span>
              <br />
              <br />
              <span>
                  Computadores sempre estiveram presente na minha vida e sempre gostei muito de me envolver com eles,
                  portanto, escolhi a área da tecnologia para prosseguir com uma carreira profissional e desbravar da
                  melhor forma possível.
              </span>
          </div>
      </div>

      <br />
      <div>
          <div class="skills">
              <h2>Tecnologias:</h2>

              <br />
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
              <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="" />
              <img
                  src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white"
                  alt=""
              />
              <br />
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

              <br />
              <br />
              <h2>Banco de dados:</h2>
              <br />

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

              <br />
              <br />
              <h2>Metodologias Àgeis:</h2>
              <br />
              <span style="font-size:22px">Scrum</span>

              <br />
              <br />
              <span class="default-break-line p-default">
                  Se especializar em novas tecnologias são sempre um desafio, com isso novas responsabilidades também,
                  é isto sempre será bem-vindo.
              </span>
              <br />
              <span class="default-break-line p-default">
                  Todo conteúdo acima pode ser visto em meu
                  <a href="https://github.com/vitinhos67" target="_blank">Git Hub</a>.
              </span>
          </div>
      </div>

      <br />
      <div>
          <h2>Sociais</h2>

          <div class="social">
              <a href="https://github.com/vitinhos67" name="github" target="_blank"
                  ><img class="social-icons-link" src="../assets/github.png" alt="GitHub"
              /></a>
              <a href="https://twitter.com/victorsanttos67" target="_blank"
                  ><img class="social-icons-link" src="../assets/twitter.png" alt="Twitter"
              /></a>
              <a href="https://www.linkedin.com/in/victorsanttos/" target="_blank"
                  ><img class="social-icons-link" src="../assets/linkedin.png" alt="Linkedin"
              /></a>
              <a href="https://medium.com/@santtosvictor42" target="_blank"
                  ><img class="social-icons-link" src="../assets/medium.png" alt="Medium"
              /></a>
              <a href="https://dev.to/vitinhos67" target="_blank"
                  ><img class="social-icons-link" src="../assets/dev-to.png" alt="Dev-to"
              /></a>
          </div>
          <br />
          <span class="cert-ref">Voce pode encontrar minhas certificações através do meu currículo</span>
          <span class="cert-ref p-default">
              <a
                  class="curriculo-link"
                  href="https://drive.google.com/file/d/1GEmqKmwYjUlHOmK1zX1b09IDLLg_54mI/view?usp=share_link"
                  target="_blank"
              >
                  clique aqui para ter acesso ao meu currículo.
              </a>
          </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
}
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

a {
  color: #316192;
}

a:hover {
  color: green;
}

.container {
  width: 1200px;

  padding: 30px 0px 0px 20px

}

.info-text {
  font-size: 24px;
  padding-top: 5px;
}

.skills img {
  padding-left: 3px;
}

.default-break-line {
  word-wrap: break-word;
}

.color-info-user-terminal {
  color: green;
}

.color-path-system-terminal {
  color: rgb(39, 39, 225);
}

.social-icons-link {
  width: 50px;
  padding-top: 10px;
  padding-left: 15px;
  filter: invert(1);
}

.ref-terminal {
  font-size: 23px;
}

.p-default {
  font-size: 19px;
}



@media screen and (min-width: 800px) and (max-width:1200px){
  .container {
      width: 700px;

  }
}

@media screen and (min-width: 700px) and (max-width: 799px) {
  .container {
      width: 500px;
    
  }
}

@media screen and (min-width: 600px) and (max-width: 699px) {
  .container {
      width: 500px;

  }
}

@media screen and (min-width: 500px) and (max-width: 599px) {
  .container {
    padding: 10px 0px 0px 12px;
      width: 350px;
  }
}

@media screen and (min-width: 400px) and (max-width: 499px) {
  .container {
      padding: 10px;
      width: 280px;
  }
}
@media screen and (min-width: 300px) and (max-width: 399px) {
  .container {
      padding: 5px;
      width: 360px;
  }

  .social img {
      width: 40px;
  }
}

@media screen and (max-width: 299px) {
  .container {
      padding: 0px;
      width: 250px;
  }

  .skills img {
      width: 70px;
  }

  .social img {
      width: 30px;
  }
}
</style>
