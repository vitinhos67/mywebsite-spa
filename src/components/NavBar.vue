<template>
  <nav class="nav">
    <ul class="nav__wrapper">
      <li class="nav__item">
        <a href="/">Home</a>
      </li>
      <!--       <li class="nav__item certifications">
        <a href="/certificacoes">Certificações</a>
      </li> -->
    </ul>
  </nav>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Open+Sans:wght@300&display=swap");

nav {
  background-color: #0e0e16;
  display: flex;
  width: 100%;
  height: 75px;
  border-bottom: #17172b 1px solid;
}

nav a {
  font-size: 35px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

ul li {
  font-family: "Open Sans", sans-serif;
  list-style: none;
  font-size: 25px;
  position: absolute;
  top: 12px;
  left: 25px;
}

.certifications {
  left: 120px;
}
</style>
