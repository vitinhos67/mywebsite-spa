<template>
  <footer>
    <div class="container">
      <div class="contact">
        <h3>Contato</h3>
        <p>Email: santtosvictor42@gmail.com</p>
      </div>
      <div class="social">
        <h3 style="padding-left: 15px">Redes Sociais</h3>

        <a href="https://github.com/vitinhos67" target="_blank"
          ><img
            class="social-icons"
            src="../assets/images/github.png"
            alt="Git Hub"
        /></a>
        <a href="https://www.linkedin.com/in/victorsanttos/" target="_blank"
          ><img
            class="social-icons"
            src="../assets/images/linkedin.png"
            alt="Linkedin"
        /></a>
        <a href="https://dev.to/vitinhos67" target="_blank">
          <img
            class="social-icons"
            src="../assets/images/dev-to.png"
            alt="Dev to"
          />
        </a>
        <a href="https://twitter.com/victorsanttos67" target="_blank">
          <img
            class="social-icons"
            src="../assets/images/twitter.png"
            alt="Twitter"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style>
footer {
  background-color: #0e0e16;
  border-top: #17172b 1px solid;
  color: #fff;
  padding: 30px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
}

.contact,
.social {
  width: 100%;

  margin-bottom: 30px;
}

.contact h3,
.social h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.social ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
}

.social-icons {
  width: 50px;
  padding-top: 10px;
  padding-left: 15px;
  filter: invert(100%);
}

@media screen and (min-width: 768px) {
  .contact,
  .social {
    width: 45%;
  }
}
</style>
