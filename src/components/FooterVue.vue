<template>
  <footer class="footer">
    <div class="container-footer social">
      <div class="social-images-href">
        <a href="https://github.com/vitinhos67" name="github" target="_blank"
          ><img
            class="social-icons-link"
            src="../assets/images/github.png"
            alt="GitHub"
        /></a>
        <a href="https://twitter.com/victorsanttos67" target="_blank"
          ><img
            class="social-icons-link"
            src="../assets/images/twitter.png"
            alt="Twitter"
        /></a>
        <a href="https://www.linkedin.com/in/victorsanttos/" target="_blank"
          ><img
            class="social-icons-link"
            src="../assets/images/linkedin.png"
            alt="Linkedin"
        /></a>
        <a href="https://medium.com/@santtosvictor42" target="_blank"
          ><img
            class="social-icons-link"
            src="../assets/images/medium.png"
            alt="Medium"
        /></a>
        <a href="https://dev.to/vitinhos67" target="_blank"
          ><img
            class="social-icons-link"
            src="../assets/images/dev-to.png"
            alt="Dev-to"
        /></a>
      </div>
    </div>

    <div class="container-footer contato">
      <p>Contato</p>
      <span> santtosvictor42@email.com</span>
    </div>
  </footer>
</template>

<script></script>

<style>
.footer {
  width: 100%;
  font-family: "Open Sans", sans-serif;
  background-color: #0e0e16;
  border-top: #17172b 1px solid;

  display: flex;
}

.social-images-href {
  width: 70%;
}

.social {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.container-footer {
  width: 30%;
  height: 100px;
}

.contato {
  padding-top: 25px;
}

.social h5 {
  position: absolute;
  top: 695px;
}

.social-icons-link {
  width: 45px;
  padding-top: 10px;
  padding-left: 15px;
  filter: invert(1);
}

@media screen and (min-width: 800px) and (max-width: 1200px) {
  .contato p {
    font-size: 25px;
  }
  .contato span {
    font-size: 20px;
  }
}

@media screen and (min-width: 700px) and (max-width: 799px) {
  .social-icons-link {
    width: 40px;
  }
}
@media screen and (min-width: 600px) and (max-width: 699px) {
  .social-icons-link {
    width: 40px;
  }
}

@media screen and (min-width: 500px) and (max-width: 599px) {
  .social-icons-link {
    width: 35px;
  }
}

@media screen and (min-width: 400px) and (max-width: 499px) {
  .social-icons-link {
    width: 32px;
  }
}

@media screen and (min-width: 300px) and (max-width: 399px) {
  .social-icons-link {
    width: 30px;
    display: inline-flex;
  }
}
</style>
