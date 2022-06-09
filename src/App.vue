<template>
  <div id="app">
    <navbar-component />
    <main class="container">
      <router-view />
    </main>
    <footer-component />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FooterComponent from "./components/FooterComponent.vue";
import NavbarComponent from "./components/NavbarComponent.vue";

export default {
  components: { NavbarComponent, FooterComponent },
  name: "App",
  methods: {
    ...mapActions(["getGames", "initializeStore"]),
  },
  created() {
    this.getGames();
    this.initializeStore();
  },
};
</script>

<style lang="scss">
@import "@/assets/custom-vars";
@import "~bootstrap/scss/bootstrap";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}
.max-content {
  max-width: max-content;
}
</style>
