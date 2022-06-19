<template>
  <div id="NotFound">
    <h1 v-text="`404`" />
    <h2 v-text="`Not Found`" />
    <div class="composition">
      <img id="sombra" src="@/assets/Cute-funny-cat-astronaut-in-space.png" />
      <img id="fondo" src="@/assets/space.jpg" />
      <img id="gatito" src="@/assets/Cute-funny-cat-astronaut-in-space.png" />
    </div>
  </div>
</template>

<script>
export default { name: "NotFound" };
</script>

<style lang="scss" scoped>
@keyframes flotar {
  0% {
    transform: translatey(20px);
  }
  100% {
    transform: translatey(0px);
  }
}
@keyframes sombraFlotar {
  0% {
    transform: translatey(-3px) translatex(15px);
  }
  100% {
    transform: translatey(0px);
  }
}
#NotFound {
  text-align: center;
  .composition {
    margin-top: 2rem;
    position: relative;
    & > * {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      height: 50vh;
    }
    #fondo {
      border-radius: 50%;
      width: 50vh;
      opacity: 0.85;
      box-shadow: -10px -8px 8px black;
      transform: rotate(-95deg);
    }
    #gatito {
      animation: flotar 5s ease-in-out infinite alternate-reverse;
    }
    #sombra {
      left: -40px;
      top: 25px;
      filter: grayscale(100%) brightness(0%);
      animation: sombraFlotar 5s ease-in-out infinite alternate-reverse;
    }
  }
}
</style>