<template>

  <div class="container-404">
    <h1>Error: Caminho não encontrado</h1>

      <h1 class="h1-404">404</h1>
      <h2>
        <a href="/">Voltar para pagina principal</a>

      </h2>

  </div>


</template>


<script>
export default {
  name: "PageNotFound"
}
</script>

<style>

.container-404 {
  text-align: center;
  padding-top: 40px;

  height: 620px;
}

.h1-404 {
  font-size: 180px;
  color: rgb(231, 15, 15);
}

a {
  text-decoration: none;
  color: #ffff
}

a:hover {
  color: green;
}


</style>