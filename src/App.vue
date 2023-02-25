<template>
  <router-view />
  <Footer />
</template>

<script>
import Footer from "./components/FooterVue.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Open+Sans:wght@300&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
  background-color: #0e1019;
  color: white;
}
</style>
