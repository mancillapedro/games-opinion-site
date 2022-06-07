<template>
  <div id="app">
    <navbar-component />
    <main class="container">
      <router-view />
    </main>
  </div>
</template>
<script>
import NavbarComponent from "./components/NavbarComponent.vue";
export default {
  components: { NavbarComponent },
  name: "App",
};
</script>
<style lang="scss">
@import "@/assets/custom-vars";
@import "~bootstrap/scss/bootstrap";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
