<template>
  <div class="wrapper">
    <main class="container">
      <h1 class="mini-summary">
        Olá, sou o Victor e dedico meu tempo a solucionar problemas.
      </h1>

      <img
        src="../assets/images/luna.jpg"
        alt="Imagem de minha cachorrinha luna"
        class="definition-img"
      />
      <span style="font-size: 0.8em"
        >Está na imagem e a luna, minha cachorrinha.</span
      >

      <p class="about-me-text">
        Desde jovem, sempre tive interesse no mundo tecnológico e mantive
        contato constante com computadores.
      </p>
      <p class="about-me-text">
        Atualmente, estudo Análise e Desenvolvimento de Sistemas com o objetivo
        de me aprofundar ainda mais nessa área e me tornar um profissional
        capacitado.
      </p>

      <p class="about-me-text">
        Estou sempre aberto a aprender, tenho facilidade em absorver novos
        conhecimentos, além de estar pronto para me reinventar, se necessário.
      </p>
      <p class="about-me-text">
        As tecnologias estão em constante evolução, por isso, mantenho-me
        dedicado aos estudos, buscando sempre me manter atualizado e próximo do
        mercado, movido também pela curiosidade. Atualmente, dedico-me aos meus
        estudos na área de tecnologia e desenvolvimento, utilizando Java no lado
        do servidor. Além disso, tenho conhecimento na linguagem JavaScript,
        tanto para o front-end quanto para o back-end.
      </p>

      <h2 class="social">Linkedin</h2>
      <span class="social-span-link"
        ><a href="https://www.linkedin.com/in/victorsanttos/" target="_blank"
          >linkedin.com/in/victorsanttos</a
        ></span
      >
      <h2 class="social">GitHub</h2>
      <span class="social-span-link"
        ><a href="https://github.com/vitinhos67" target="_blank"
          >github.com/vitinhos67</a
        ></span
      >
    </main>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  align-items: center;
  margin: 5em 0 5em 0;
  width: 30vw;
  flex-direction: column;
}

.mini-summary {
  width: 30vw;
  font-size: 1.9em;
}

.my-name-text {
  margin: 3vw;
}

.definition-img {
  width: 30vw;
  margin: 0.5vw 0 0.5vw 0;
}

.about-me-text {
  width: 30vw;
  font-size: 1.5em;
  margin: 1vh;
}

.social {
  align-self: flex-start;

  margin-top: 1vw;
}

.social-span-link {
  text-decoration: none;
  color: #656565;
  align-self: start;
}

a:hover {
  border-bottom: 1px solid #656565;
}

a:visited {
  color: #656565;
}

@media (max-width: 1000px) {
  .container {
    width: 50vw;
  }
  .about-me-text {
    font-size: 1em;
  }
  .definition-img {
    width: 40vw;
    margin: 0.5vw 0 0.5vw 0;
  }

  .mini-summary {
    width: 40vw;
    font-size: 3vw;
    padding: 1vw;
  }

  .social-span-link {
    align-self: center;
    font-size: 1em;
  }
  .social {
    align-self: center;
    font-size: 1em;
  }
}

@media (max-width: 780px) {
  .container {
    width: 80vw;
    padding: 1em;
  }

  .social {
    font-size: 1em;
  }
  .about-me-text {
    width: 70vw;
    margin: 1vh;
    font-size: 1em;
  }
  .definition-img {
    width: 70vw;
    margin: 0.5vw 0 0.5vw 0;
  }

  .mini-summary {
    width: 70vw;
    font-size: 5vw;
    padding: 1vw;
  }
}
</style>
