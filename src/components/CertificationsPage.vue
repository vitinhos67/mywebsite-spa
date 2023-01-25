<template>
  <div class="container-cert-pg">
    <h1>Minhas certificações</h1>
    <br />

    <div class="grid-cert">
      <span>
        <p>
          <a
            class="title"
            href="https://www.udemy.com/certificate/UC-da71dd69-7985-41bd-abed-749281f3bf53/"
            >Docker para desenvolvedores Javascript / Node.JS</a
          >
        </p>
        <p class="instituicao">Udemy - 7 horas de duração</p>
      </span>
      <br />
      <span>
        <p>
          <a
            class="title"
            href="https://cursos.alura.com.br/user/santtosvictor42/fullCertificate/70db4da6ee0f921e52f483d1e34b9bb7"
            >Todas Certificações na instituição Alura</a
          >
        </p>
        <p class="instituicao">Alura - 120 horas de duração</p>
      </span>
      <br />
      <span>
        <p>
          <a
            class="title"
            href="https://www.udemy.com/certificate/UC-1c7703e5-ab17-4aa8-9e6b-8297a42cb18f/"
          >
            Gestão Ágil com Scrum</a
          >
        </p>
        <p class="instituicao">Udemy - 7 horas de duração</p>
      </span>
      <br />
      <span>
        <p>
          <a
            class="title"
            href="https://www.udemy.com/certificate/UC-a79cabbe-9419-496e-9b99-dae6897e8316/"
          >
            TypeScript do básico ao avançado (c/ React, Express)</a
          >
        </p>
        <p class="instituicao">Udemy - 14 horas de duração</p>
        <br />
      </span>
      <br />
      <div style="word-wrap: break-word">
        <p>
          <a
            class="title"
            href="https://www.udemy.com/certificate/UC-c854b809-c515-448c-875c-dc670547a38a/"
          >
            Node.js Microservices: NestJS, RabbitMQ and Cloud Services</a
          >
        </p>
        <p class="instituicao">Udemy - 23 horas de duração</p>
        <br />
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

.container-cert-pg {
  font-family: "Open Sans", sans-serif;
  margin: 0 auto;
  width: 100%;
  word-wrap: break-word;
  height: 540px;
}

.container-cert-pg h1 {
  padding-top: 20px;
  text-align: center;
}

.grid-cert {
  width: 250px;
  margin: 0 auto;
}
@media screen and (min-width: 800px) and (max-width: 1200px) {
  .title {
    font-size: 25px;
  }
  .container-cert-pg {
    height: 700px;
  }

  .grid-cert {
    width: 600px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 700px) and (max-width: 799px) {
}

@media screen and (min-width: 600px) and (max-width: 699px) {
  .title {
    font-size: 30px;
  }
  .container-cert-pg {
    height: 1100px;
  }
}
@media screen and (min-width: 500px) and (max-width: 599px) {
  .title {
    font-size: 30px;
  }
  .container-cert-pg {
    height: 1100px;
  }
}
@media screen and (min-width: 400px) and (max-width: 499px) {
  .title {
    font-size: 30px;
  }
  .container-cert-pg {
    height: 1100px;
  }
}
@media screen and (min-width: 300px) and (max-width: 399px) {
  .container-cert-pg {
    width: 300px;
    text-align: center;
    height: 600px;
  }
  .grid-cert {
    width: 280px;
    margin: 0 auto;
  }

  .title {
    font-size: 20px;
  }
}
</style>
