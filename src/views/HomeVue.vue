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

@media (max-width: 1200px) {
  .btf1 {
    top: 80px;
  }

  .container-2 .btf1 h1 {
    font-size: 50px;
    font-family: "Montserrat", sans-serif;
  }

  .btn-curriculo {
    padding: 5px;
    font-size: 25px;
    border-radius: 8px;
  }

  .container-1 {
    flex: 1; /* Alterado para flex: 1 */
  }

  .img-1 {
    width: 120%;
  }
}

@media (max-width: 768px) {
  .img-1 {
    width: 100%;
  }

  .container {
    flex-direction: column;
  }
}
</style>
