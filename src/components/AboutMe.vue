<template>
  <main class="container">
    <div class="content-main">
      <h1 class="main-text color-text">Sobre mim</h1>
      <p class="text-p color-text">
        Nascido e criado no inteiror de Minas. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Error quasi nulla vero, reprehenderit
        consequatur iste, mollitia nam, quia ex aperiam aspernatur! Debitis
        quibusdam, cumque unde voluptatem sed molestiae neque sunt! Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Recusandae, dignissimos
        atque dolorum fugiat repellendus nam perferendis sed id. Mollitia
        placeat sapiente deleniti est, totam voluptatem laborum sit ad? Aliquid,
        ab? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        voluptatem eaque rem earum a rerum magnam cumque quos nobis, ducimus
        veritatis, velit minima hic adipisci doloremque fugiat possimus ut
        consequatur.
      </p>

      <h1 class="main-text color-text">Formações</h1>

      <h2 class="text-p color-text">
        Análise e Desenvolvimento de Sistemas - Faminas
      </h2>

      <p class="color-text p-date">AGOSTO/23 - ATUALMENTE</p>
    </div>

    <div class="content-main">
      <ProjectsMain />
    </div>
  </main>
</template>

<script>
import ProjectsMain from "./main/ProjectsMain.vue";

export default {
  components: {
    ProjectsMain,
  },
};
</script>

<style scoped>
.color-text {
  color: #4b4d57;
}

main.container div.content-main {
  width: 50%;
}

.main-text {
  font-size: 50px;
  padding: 30px 20px 8px 40px;
}

.text-p {
  padding: 30px 20px 8px 40px;
}

.p-date {
  padding-left: 40px;
}

@media (max-width: 480px) {
  body {
    text-align: center;
  }

  main.container {
    margin-top: 10px;
    height: auto;
    border: 1px solid red;
  }

  main.container div.content-main {
    padding: 0;
    margin: 0;
    width: 100%;
    border: 1px solid blue;
  }

  .text-p {
    font-size: 20px;
    margin-left: 5px;
    margin-top: 5px;
    padding: 0;
  }

  .text-p,
  .main-text,
  .p-date {
    text-align: center;
  }

  .main-text {
    margin: 0;
    font-size: 30px;
  }

  .p-date {
    padding-left: 5px;
    font-size: 12px;
  }
}

@media (max-width: 992px) and (min-width: 768px) {
  main.container {
    height: auto;
  }

  main.container div.content-main {
    width: 100%;
  }
}

@media (max-width: 768px) and (min-width: 480px) {
  .text-p,
  .main-text,
  .p-date {
    text-align: center;
  }

  .main-text {
    margin: 0;
    font-size: 30px;
  }

  main.container div.content-main {
    width: 100%;
  }
}
</style>
