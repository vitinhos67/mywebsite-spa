<template>
  <div class="popup">
    <!-- Conteúdo do pop-up -->
    <div class="popup-content">
      <p>Bem-vindo ao meu site!</p>
      <p>Role para baixo para descobrir mais.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: true, // Mostrar o pop-up inicialmente
    };
  },
};
</script>

<style>
.popup {
  /* Estilos para o pop-up */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Fundo escuro semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease; /* Animação de fade-in */
  opacity: 0; /* Começa com a opacidade zero */
}

.popup-content {
  /* Estilos para o conteúdo do pop-up */
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
</style>
