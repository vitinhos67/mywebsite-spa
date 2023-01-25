<template>
  <nav-bar />
  <router-view />
  <footer-vue />
</template>

<script>
import FooterVue from "./components/FooterVue.vue";
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    FooterVue,
    NavBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #0e1019;
  color: white;
}
</style>
