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
          <a
            href="../assets/pdf/victor-santtos-cv.pdf"
            download
            class="btn-curriculo"
            >Baixar curriculo</a
          >
        </div>

        <div class="sociais-div">
          <p>Sociais</p>

          <img src="../assets/images/sociais/github.png" alt="" />
          <img src="../assets/images/sociais/twitter.png" alt="" />
          <img src="../assets/images/sociais/linkedin.png" alt="" />
          <img src="../assets/images/sociais/dev-to.png" alt="" />
        </div>

        <div class="lang-images-div">
          <p>Linguagens</p>

          <img
            src="../assets/images/languages/java.png"
            alt=""
            class="lang-images"
          />

          <img
            src="../assets/images/languages/javascript.png"
            alt=""
            class="lang-images"
          />
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");

.body {
  background-color: #f3f1f6;
}

.container {
  height: 91vh;
  display: flex;
}

.img-1 {
  width: 100%; /* Alterado para 100% */
}

.container-1 {
  flex: 1; /* Alterado para flex: 1 */
}

.btf1 {
  margin: 100px;
  /* position: absolute; REMOVIDO */
  top: 150px;
}

.curriculo-a {
  margin-top: 30px;
  margin-left: 10px;
}

.btn-curriculo {
  padding: 10px;
  border: 1px solid #202124;
  font-size: 30px;
  color: #ffff;
  transition: background-color 0.8s ease, box-shadow 0.5s ease;
  border-radius: 10px;
  background-color: #01004c;
}

.btn-curriculo:hover {
  background-color: black;
}

.container-2 .btf1 h1 {
  font-size: 80px;
  font-family: "Montserrat", sans-serif;
}

.container-2 .btf1 p {
  font-family: "Montserrat", sans-serif;
}

.sociais-div {
  width: 100%;
  margin-top: 35px;
  height: 150px;
}
.sociais-div p {
  margin-top: 20px;
  margin-left: 10px;
  font-size: 40px;
}

.sociais-div img {
  width: 5vh;
  margin: 10px;
}

.lang-images-div .lang-images {
  width: 10vh;
  padding: 10px;
}
.lang-images-div p {
  margin-top: 20px;
  margin-left: 10px;
  font-size: 35px;
}

@media (max-width: 1200px) {
  .container {
    flex-direction: column;
  }

  .container-2 .btf1 h1 {
    font-size: 50px;
    font-family: "Montserrat", sans-serif;
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
  .btf1 p {
    margin: 0px;
  }

  .btn-curriculo {
    font-size: 10px;
  }

  .container-2 .btf1 h1 {
    font-size: 50px;
  }
}
</style>
