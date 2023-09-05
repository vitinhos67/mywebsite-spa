<template>
  <h1 class="main-text color-text">Sobre mim</h1>
  <p class="text-p color-text">
    Nasci e fui criado no interior de Minas Gerais. Desde jovem, sempre tive
    interesse no mundo tecnológico e mantive contato constante com computadores.
    Atualmente, estudo Análise e Desenvolvimento de Sistemas com o objetivo de
    me aprofundar ainda mais nessa área e me tornar um profissional capacitado.
    Estou sempre aberto a aprender, tenho facilidade em absorver novos
    conhecimentos e estou disposto a aprender com os erros, além de estar pronto
    para me reinventar, se necessário.
    <br />

    As tecnologias estão em constante evolução, por isso, mantenho-me dedicado
    aos estudos, buscando sempre me manter atualizado e próximo do mercado,
    movido também pela curiosidade. Atualmente, dedico-me aos meus estudos na
    área de tecnologia e desenvolvimento, utilizando Java no lado do servidor.
    Além disso, tenho conhecimento na linguagem JavaScript, tanto para o
    front-end quanto para o back-end.
  </p>

  <h1 class="main-text color-text">Formações</h1>

  <h2 class="text-p color-text">
    Análise e Desenvolvimento de Sistemas - Faminas
  </h2>

  <p class="color-text p-date">AGOSTO/23 - ATUALMENTE</p>

  <a href="https://www.linkedin.com/in/victorsanttos/details/certifications/"
    ><button class="btn-redirect-skills">
      Clique aqui e veja minhas certificações
    </button></a
  >
</template>

<style>
.color-text {
  color: #4b4d57;
}

.btn-redirect-skills {
  margin: 5vh 0 0 3.5vh;
  font-size: 2vh;
  padding: 1.5vh 3vh 1.5vh 3vh;
  color: #ffff;
  transition: background-color 0.4s ease, box-shadow 0.5s ease;
  border-radius: 10px;
  background-color: #8953ff;
}

.btn-redirect-skills:hover {
  background-color: #01004c;
  color: #ffffff; /* Altera a cor do texto para branco ao passar o mouse */
}

/* Remove a formatação padrão do link dentro do botão */
.btn-redirect-skills a {
  color: inherit;
  text-decoration: none;
}

.main-text {
  font-size: 50px;
  padding: 30px 20px 8px 40px;
}

.text-p {
  padding: 30px 20px 8px 40px;
}

.p-date {
  padding-left: 40px;
}

@media (max-width: 1400px) and (min-width: 922px) {
}

@media (max-width: 992px) and (min-width: 768px) {
}

@media (max-width: 768px) and (min-width: 480px) {
  .text-p,
  .main-text,
  .p-date {
    text-align: center;
  }

  .main-text {
    margin: 0;
    font-size: 30px;
  }
}

@media (max-width: 480px) {
  body {
    text-align: center;
  }

  .text-p {
    font-size: 20px;
    margin-left: 5px;
    margin-top: 5px;
    padding: 0;
  }

  .text-p,
  .main-text,
  .p-date {
    text-align: center;
  }

  .main-text {
    margin: 0;
    font-size: 30px;
  }

  .p-date {
    padding-left: 5px;
    font-size: 12px;
  }
}
</style>
