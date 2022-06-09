<template>
  <div id="app">
    <navbar-component />
    <main class="container-fluid px-3 px-md-5">
      <router-view />
    </main>
    <footer-component/>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import FooterComponent from './components/FooterComponent.vue';
import NavbarComponent from "./components/NavbarComponent.vue";

export default {
  components: { NavbarComponent, FooterComponent },
  name: "App",
  computed:{
    ...mapState(['opinions'])
  },
  methods: {
    ...mapActions(["getGames", "initializeStore"]),
  },
  watch: {
    opinions(newValue){
      localStorage.setItem('opinions', JSON.stringify(newValue));
    }
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
  width: max-content;
}
</style>
