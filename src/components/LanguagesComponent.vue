<template>
  <InformationLanguageTooltip :message="javaInformation" />
  <img
    src="../assets/images/languages/java.png"
    alt="Imagem da linguagem java"
    class="lang-images"
  />
  <InformationLanguageTooltip :message="javascriptInformation" />
  <img
    src="../assets/images/languages/javascript.png"
    alt="Imagem da linguagem Javascript"
    class="lang-images"
  />
  <img
    src="../assets/images/languages/typescript.png"
    alt="Imagem da Linguagem Typescript"
    class="lang-images"
  />
  <img
    src="../assets/images/languages/docker.png"
    alt="Logo do Docker"
    class="lang-images"
  />
  <img
    src="../assets/images/languages/mongodb.png"
    alt="Logo do MongoDB"
    class="lang-images"
  />
  <img
    src="../assets/images/languages/node.png"
    alt="Logo do Node"
    class="lang-images"
  />
  <img
    src="../assets/images/languages/spring.png"
    alt="Logo do framework Spring"
    class="lang-images"
  />
  <img
    src="../assets/images/languages/postgres.png"
    alt="Logo do banco de dados PostgreSQL"
    class="lang-images"
  />
</template>

<script>
import InformationLanguageTooltip from "./InformationLanguageTooltip.vue";

export default {
  components: {
    InformationLanguageTooltip,
  },
  data() {
    return {
      javaInformation: "Frameworks: SpringBoot",
      javascriptInformation:
        "Frameworks: Node.js, Nest.js, Vue.js, Express, Socket.io ",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");

.lang-images-div .lang-images {
  width: 7vh;
  margin-left: 10px;
  margin-top: 20px;
  padding: 10px;
}
</style>
