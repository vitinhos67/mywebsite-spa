<template>
  <div class="container-404">
    <p class="text-bird">Você e um passarinho perdido no ninho?</p>

    <img
      class="passarinho"
      src="../assets/images/passarinho.jpeg"
      alt="Imagem de um passaro"
    />
    <h2>
      <a href="/">Voltar para pagina principal</a>
    </h2>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
.text-bird {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 30px;
  text-align: center;
  color: red;
}

.container-404 {
  text-align: center;
  padding-top: 40px;
  background-color: #fcfefd;
  height: 620px;
}

img.passarinho {
  width: 400px;
}

.h1-404 {
  font-size: 180px;
  color: rgb(231, 15, 15);
}

a {
  text-decoration: none;
}

a:hover {
  color: green;
}
</style>
