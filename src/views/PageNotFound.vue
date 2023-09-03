<template>
  <div class="container-404">
    <p class="text-bird">Esta perdido?</p>

    <img
      class="animaiszinhos"
      src="../assets/images/animaiszinhos.png"
      alt="Animaiszinhos legais e fofinhos. Sendo gatos, cachorros e passaros, e
        também um ratinho"
    />

    <a href="/">
      <button class="button-back-page">Voltar para pagina principal</button></a
    >
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
.text-bird {
  font-family: "Comic Sans MS", "Comic Sans", sans-serif;
  font-size: 30px;
  text-align: center;
}

.container-404 {
  text-align: center;
  padding-top: 40px;
  height: 620px;
}

img.animaiszinhos {
  width: 40vw;
  margin: 30px;
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
.button-back-page {
  display: block;
  text-decoration: none;
  margin: auto;
  color: #ffff;
  padding: 20px;
  font-size: 20px;
  background-color: #01004c;
  border-radius: 10px;
  color: #ffffff;
  transition: background-color 0.4s ease, box-shadow 0.5s ease;
}
.button-back-page:hover {
  background-color: #202124;
}
</style>
