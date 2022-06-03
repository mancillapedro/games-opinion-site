<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/" v-text="`Home`" /> |
        <router-link to="/opinions" v-text="`Opiniones`" /> |
        <router-link to="/opinions/manage" v-text="`Administración`" />
      </nav>
    </header>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import "@/assets/custom-vars";
@import "~bootstrap/scss/bootstrap";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
