<template>
  <div class="container">
    <div class="container-1">
      <div class="image-container">
        <img src="../assets/images/7081473.jpg" alt="" class="img-1" />
      </div>
    </div>
    <div class="container-2">
      <div class="btf1">
        <p>Desenvolvedor back-end</p>
        <h1>Victor Santos</h1>

        <div class="curriculo-a">
          <button class="btn-curriculo">
            <a
              href="https://drive.usercontent.google.com/download?id=1k4_oZPTVWovbrtduRiiaWi2AAWdasr0I&export=download&authuser=0&confirm=t&uuid=2e1f045e-e6af-4ff8-b54f-969c873c13b5&at=APZUnTVlvTXfzv2vB5VOsvfG8B5R:1691775618587"
              download
              >Baixar curriculo</a
            >
          </button>
        </div>

        <div class="lang-images-div">
          <InformationLanguageTooltip :message="javaInformation" />
          <img
            src="../assets/images/languages/java.png"
            alt=""
            class="lang-images"
          />
          <InformationLanguageTooltip :message="javascriptInformation" />
          <img
            src="../assets/images/languages/javascript.png"
            alt=""
            class="lang-images"
          />
          <img
            src="../assets/images/languages/typescript.png"
            alt=""
            class="lang-images"
          />
          <img
            src="../assets/images/languages/docker.png"
            alt=""
            class="lang-images"
          />
          <img
            src="../assets/images/languages/mongodb.png"
            alt=""
            class="lang-images"
          />
          <img
            src="../assets/images/languages/node.png"
            alt=""
            class="lang-images"
          />
          <img
            src="../assets/images/languages/spring.png"
            alt=""
            class="lang-images"
          />
          <img
            src="../assets/images/languages/postgres.png"
            alt=""
            class="lang-images"
          />
        </div>
      </div>

      <div class="sociais-div">
        <p>Sociais</p>

        <a href="https://github.com/vitinhos67" target="_blank">
          <img src="../assets/images/sociais/github.png" alt=""
        /></a>

        <a
          href="https://www.linkedin.com/in/victorsanttos/
        "
          target="_blank"
        >
          <img src="../assets/images/sociais/linkedin.png" alt=""
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import InformationLanguageTooltip from "../components/InformationLanguageTooltip.vue";

export default {
  name: "HomeView",
  components: {
    InformationLanguageTooltip,
  },

  data() {
    return {
      javaInformation: "Frameworks: SpringBoot",
      javascriptInformation:
        "Frameworks: Node.js, Nest.js, Vue.js, Express, Socket.io ",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");

.body {
  background-color: #f3f1f6;
}

.container {
  height: 91vh;
  display: flex;
}

.p-linguagens {
  font-size: 25px;
  margin-top: 20px;
}

.img-1 {
  width: 100%; /* Alterado para 100% */
}

.container-1 {
  flex: 1; /* Alterado para flex: 1 */
}

.btf1 {
  margin: 100px 100px 30px 100px;
  top: 150px;
}

.curriculo-a {
  margin-top: 30px;
  margin-left: 10px;
}

.btn-curriculo {
  padding: 10px;
  font-size: 30px;
  color: #ffff;
  transition: background-color 0.4s ease, box-shadow 0.5s ease;
  border-radius: 10px;
  background-color: #01004c;
}

.btn-curriculo:hover {
  background-color: #202124;
  color: #ffffff; /* Altera a cor do texto para branco ao passar o mouse */
}

/* Remove a formatação padrão do link dentro do botão */
.btn-curriculo a {
  color: inherit;
  text-decoration: none;
}

/* Ajusta o espaçamento dentro do botão */
.btn-curriculo a {
  display: block;
  padding: 10px;
}

.container-2 .btf1 h1 {
  font-size: 80px;
  font-family: "Montserrat", sans-serif;
}

.container-2 .btf1 p {
  font-family: "Montserrat", sans-serif;
}

.sociais-div {
  width: 80%;
  margin-left: 110px;
  height: 150px;
}
.sociais-div p {
  margin-left: 5px;
  font-size: 30px;
  font-family: "Montserrat", sans-serif;
}

.sociais-div img {
  width: 5vh;
  margin: 10px;
}

.lang-images-div {
  margin-top: 10px;
}

.lang-images-div .lang-images {
  width: 7vh;
  margin-left: 10px;
  margin-top: 20px;
  padding: 10px;
}
.lang-images-div p {
  margin-top: 25px;
  margin-left: 10px;
  font-size: 20px;
}

@media (max-width: 1200px) {
  .container {
    flex-direction: column;
  }

  .container-2 .btf1 h1 {
    font-size: 50px;
  }

  .img-1 {
    width: 100%;
  }

  .btn-curriculo {
    padding: 5px;
    font-size: 25px;
    border-radius: 8px;
  }

  .btf1 {
    text-align: center;
  }

  .container-1 {
    flex: 1; /* Alterado para flex: 1 */
  }
}

@media (max-width: 768px) {
  .img-1 {
    width: 100%;
  }

  .btf1 {
    text-align: center;
  }

  .container {
    flex-direction: column;
  }
}

@media (max-width: 400px) {
  .btf1 {
    margin: 0px;
  }

  .lang-images-div {
    width: 80%;
    margin: 0 auto;
  }

  .sociais-div {
    width: 50%;
    text-align: center;
    margin-left: 100px;
  }

  .btf1 p {
    margin: 0px;
  }

  .container-2 .btf1 h1 {
    font-size: 50px;
  }
}
</style>
