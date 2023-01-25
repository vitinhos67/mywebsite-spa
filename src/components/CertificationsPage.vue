<template>
  <div class="container">
    <div class="list-cert">
      <h1>Minhas certificações</h1>
      <br />

      <div class="grid-cert">
        <span>
          <h2>
            <a
              class="title"
              href="https://www.udemy.com/certificate/UC-da71dd69-7985-41bd-abed-749281f3bf53/"
              >Docker para desenvolvedores Javascript / Node.JS</a
            >
          </h2>
          <span class="instituicao">Udemy - 7 horas de duração</span> <br />
        </span>
        <br />
        <span>
          <h2>
            <a
              class="title"
              href="https://cursos.alura.com.br/user/santtosvictor42/fullCertificate/70db4da6ee0f921e52f483d1e34b9bb7"
              >Todas Certificações na instituição Alura</a
            >
          </h2>
          <span class="instituicao">Alura - 120 horas de duração</span> <br />
        </span>
        <br />
        <span>
          <h2>
            <a
              class="title"
              href="https://www.udemy.com/certificate/UC-1c7703e5-ab17-4aa8-9e6b-8297a42cb18f/"
            >
              Gestão Ágil com Scrum</a
            >
          </h2>
          <span class="instituicao">Udemy - 7 horas de duração</span> <br />
        </span>
        <br />
        <span>
          <h2>
            <a
              class="title"
              href="https://www.udemy.com/certificate/UC-a79cabbe-9419-496e-9b99-dae6897e8316/"
            >
              TypeScript do básico ao avançado (c/ React, Express)</a
            >
          </h2>
          <span class="instituicao">Udemy - 14 horas de duração</span> <br />
        </span>
        <br />
        <span>
          <h2>
            <a
              class="title"
              href="https://www.udemy.com/certificate/UC-c854b809-c515-448c-875c-dc670547a38a/"
            >
              Node.js Microservices: NestJS, RabbitMQ and Cloud Services</a
            >
          </h2>
          <span class="instituicao">Udemy - 23 horas de duração</span> <br />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CertificacoesPage",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Open+Sans:wght@300&display=swap");

.container {
  font-family: "Open Sans", sans-serif;
  margin: 0 auto;
  width: 700px;
  height: 620px;
}

.container h1 {
  padding-top: 20px;
  text-align: center;
}

.list-cert {
  text-align: center;
}

.grid-cert {
  width: 600px;
  text-align: left;
  margin: 0 auto;
  overflow: hidden;
}

h3 .title {
  text-decoration: dotted;
}
</style>
