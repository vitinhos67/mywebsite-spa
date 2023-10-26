<template>
  <div class="container-404">
    <p class="text-bird">Esta perdido?</p>

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
.container-404 {
  text-align: center;
  padding-top: 40px;
  height: 620px;
}

p {
  margin: 20px;
}

img.animaiszinhos {
  width: 40vw;
  margin: 30px;
}

.button-back-page {
  display: block;
  text-decoration: none;
  margin: auto;
  color: #ffff;
  padding: 10px;
  font-size: 20px;
  background-color: #01004c;
  border-radius: 10px;
  border: none;
  color: #ffffff;
  transition: background-color 0.4s ease, box-shadow 0.5s ease;
}
.button-back-page:hover {
  background-color: #202124;
}
</style>
