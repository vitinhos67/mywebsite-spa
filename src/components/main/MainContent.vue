<template>
  <main class="container">
    <div class="content-main">
      <AboutMe></AboutMe>
    </div>
    <div class="content-main" ref="targetElement">
      <ProjectsMain />
    </div>
  </main>
</template>

<script>
import ProjectsMain from "./ProjectsMain.vue";
import AboutMe from "./AboutMe.vue";

export default {
  components: {
    AboutMe,
    ProjectsMain,
  },
  computed: {},
};
</script>

<style scoped>
main.container div.content-main {
  width: 50%;
}
main.container {
  height: 85vh;
}

@media (max-width: 480px) {
  main.container {
    margin-top: 10px;
    height: auto;
  }

  main.container div.content-main {
    padding: 0;
    margin: 0;
    width: 100%;
  }
}

@media (max-width: 1400px) and (min-width: 922px) {
  main.container {
    height: auto;
  }

  main.container div.content-main {
    width: 100%;
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
  main.container div.content-main {
    width: 100%;
    text-align: center;
  }
}
</style>
