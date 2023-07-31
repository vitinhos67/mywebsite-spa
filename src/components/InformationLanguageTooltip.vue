<template>
  <div class="tooltip">
    <img
      src="../assets/images/information-icon.png"
      alt=""
      style="width: 15px"
    />
    <span class="tooltiptext">{{ message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String, // Defina o tipo do parâmetro (pode ser qualquer tipo: String, Number, Object, Array, etc.)
      required: true, // Se a propriedade é obrigatória ou não
    },
  },
};
</script>

<style>
.tooltip {
  position: absolute;
  display: inline-block;
  margin-top: 20px;
  margin-left: 13px;
  cursor: pointer;
}

.tooltip .tooltiptext {
  visibility: hidden;

  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -75px; /* Ajuste a posição horizontal da mensagem */
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
