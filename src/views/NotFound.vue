<template>
  <div id="NotFound">
    <h1 v-text="`404`" />
    <h2 v-text="`Not Found`" />
    <div class="composition">
      <img
        id="sombra"
        class="gatito"
        src="@/assets/Cute-funny-cat-astronaut-in-space.png"
        alt="Not found image"
      />
      <img id="fondo" src="@/assets/space.jpg" alt="Not found image" />
      <img
        id="gatito"
        src="@/assets/Cute-funny-cat-astronaut-in-space.png"
        alt="Not found image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  // props: {},
  // data(){}
  // computed: {},
  // methods: {}
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style lang="scss" scoped>
@keyframes flotar {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(20px);
  }
  100% {
    transform: translatey(0px);
  }
}
@keyframes sombraFlotar {
  0% {
    transform: translatey(0px);
  }
  50% {
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
  }
  #gatito {
    animation: flotar 8s ease-in-out infinite;
  }
  #sombra {
    left: -40px;
    top: 25px;
    filter: grayscale(100%) brightness(0%);
    animation: sombraFlotar 8s ease-in-out infinite;
    transform: translatey(36px);
  }
  #fondo {
    border-radius: 50%;
    width: 50vh;
    opacity: 0.85;
    box-shadow: -10px -8px 8px black;
    transform: rotate(-95deg);
  }
}
</style>