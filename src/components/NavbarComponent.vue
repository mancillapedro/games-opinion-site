<template>
  <header id="NavbarComponent" class="mb-5 sticky-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img
            src="@/assets/headset-solid.svg"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Games Opinions
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link" v-text="`Home`" />
            </li>
            <li class="nav-item">
              <router-link
                to="/opinions"
                class="nav-link"
                v-text="`Opiniones`"
              />
            </li>
            <li class="nav-item">
              <router-link
                to="/opinions/manage"
                class="nav-link"
                v-text="`Administración`"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default { name: "NavbarComponent" };
</script>