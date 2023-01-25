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
  border: #17172b 1px solid;
  height: 100%;
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
  width: 400px;
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
  width: 55px;
  padding-top: 10px;
  padding-left: 15px;
  filter: invert(1);
}

@media screen and (min-width: 600px) and (max-width: 699px) {
  .container-footer {
    width: 200px;
  }

  .social-icons-link {
    width: 43px;
  }
}

@media screen and (max-width: 375px) {
  .container-footer {
    width: 200px;
    font-size: 15px;
  }
  .container-footer a {
    display: flexbox;
  }

  .container-footer span {
    font-size: 13px;
  }

  .social-icons-link {
    width: 40px;
  }
}

@media screen and (min-width: 700px) and (max-width: 799px) {
  .footer {
    width: 100%;
    height: 150px;
  }
}

@media screen and (min-width: 400px) and (max-width: 499px) {
  .social-icons-link {
    width: 40px;
  }

  .container-footer span {
    font-size: 15px;
  }
}

@media screen and (min-width: 300px) and (max-width: 399px) {
  .container-footer {
    width: 200px;
  }

  .contato {
    font-size: 15px;
  }

  .contato span {
    font-size: 10;
  }

  .container-footer img {
    width: 40px;
  }
}
</style>
