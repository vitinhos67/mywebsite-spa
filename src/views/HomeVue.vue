<template>
  <div class="container">
    <div class="container-1">
      <img src="../assets/images/7081473.jpg" alt="" class="img-1" />
    </div>
    <div class="container-2">
      <div class="btf1">
        <p class="main-color-text">Desenvolvedor back-end</p>
        <h1 class="main-color-text">Victor Santos</h1>

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
          <LanguagesComponent></LanguagesComponent>
        </div>
      </div>

      <div class="sociais-div">
        <div class="content-social-div">
          <p>Sociais</p>

          <a href="https://github.com/vitinhos67" target="_blank">
            <img src="../assets/images/sociais/github.png" alt="Logo do GitHub"
          /></a>

          <a
            href="https://www.linkedin.com/in/victorsanttos/
"
            target="_blank"
          >
            <img
              src="../assets/images/sociais/linkedin.png"
              alt="Logo do Linkedin"
          /></a>
        </div>
      </div>
    </div>
  </div>
  <div ref="mainContentRef">
    <MainContent></MainContent>
  </div>

  <button v-if="showPopup" class="popup" @click="popUpClick">
    <img
      src="../assets/images/seta.png"
      alt="Uma seta sinalizando para baixo"
      class="seta-popup"
    />
    <span class="word-button">Continue navegando, ou, clique aqui.</span>
  </button>
</template>

<script>
import LanguagesComponent from "@/components/LanguagesComponent.vue";

import MainContent from "@/components/main/MainContent.vue";
export default {
  name: "HomeView",
  components: {
    MainContent,
    LanguagesComponent,
  },
  mounted() {
    // Exibe o pop-up por alguns segundos quando o componente é montado.
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 5000); // 5 segundos
  },
  methods: {
    popUpClick() {
      const ButtonRolling = document.querySelector(".popup");

      ButtonRolling.style.display = "none";

      const refMain = this.$refs.mainContentRef;

      refMain.scrollIntoView({ behavior: "smooth" });
    },
  },

  data() {
    return {
      showPopup: false,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");

.popup {
  position: fixed;
  bottom: 10px;
  font-size: 25px;
  left: 37%;
  background-color: #8953ff;
  color: #fff;
  padding: 10px 20px 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  animation: fadeOutAnimation 5s linear;
}

.word-button {
  padding-left: 15px;
}

.seta-popup {
  width: 15px;
  transform: rotate(90deg);
}

.container {
  height: 98vh;
  display: flex;
}

.p-linguagens {
  font-size: 25px;
  margin-top: 20px;
}

.main-color-text {
  color: #4b4d57;
}

.img-1 {
  width: 100%; /* Alterado para 100% */
}

.container-1 {
  margin: auto;
  flex: 1; /* Alterado para flex: 1 */
}

.container-2 {
  height: 75%;
  margin: auto;
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
  background-color: #8953ff;
}

.btn-curriculo:hover {
  background-color: #01004c;
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

@media (max-width: 1200px) {
  .container {
    flex-direction: column;
    height: auto;
  }

  .sociais-div {
    margin: auto;
    justify-content: center;
    height: auto;
    width: 100%;
  }

  .content-social-div {
    width: 100%;
    text-align: center;
    margin: auto;
  }

  .container-2 .btf1 h1 {
    font-size: 50px;
  }

  .img-1 {
    width: 80%;
    margin: auto;
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
    margin: 0;
    padding-left: 13%;
  }
}

@media (max-width: 992px) and (min-width: 768px) {
  div.container {
    height: auto;
  }

  .sociais-div {
    margin: auto;
    justify-content: center;
    height: auto;
    width: 100%;
  }

  .content-social-div {
    width: 100%;
    text-align: center;
    margin: auto;
  }
}

@media (max-width: 768px) and (min-width: 480px) {
  .img-1 {
    width: 100%;
  }

  .container-1 {
    display: none;
  }

  div.container {
    height: auto;
  }

  .content-social-div {
    text-align: center;
    margin: auto;
  }

  .sociais-div {
    margin: auto;
    justify-content: center;
    height: auto;
    width: 100%;
  }

  .btf1 {
    text-align: center;
  }

  .container {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .btf1 {
    margin: 0px;
  }

  .popup {
    font-size: 15px;
    left: 27%;
  }

  .container {
    display: block;
    height: auto;
    margin-top: 20px;
  }

  .container-1 {
    display: none;
  }

  .lang-images-div {
    width: 100%;
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

@keyframes fadeOutAnimation {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
