<template>
  <div id="app">
    <navbar-component />
    <main class="container-fluid px-3 px-md-5">
      <router-view />
    </main>
    <div
      class="
        alert alert-warning alert-dismissible
        fade
        show
        fixed-bottom
        max-content
        ms-auto
        me-3
      "
      role="alert"
    >
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
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
.max-content{
  width: max-content;
}
</style>
