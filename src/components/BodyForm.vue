<template>
  <ul class="list-unstyled" id="BodyForm">
    <li class="mb-3">
      <label
        for="exampleFormControlInput1"
        class="form-label"
        v-text="`Nombre:`"
      />
      <input
        required
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Evan you"
        v-model.trim="inputNombre"
      />
    </li>
    <li class="mb-3">
      <label
        for="exampleFormControlTextarea1"
        class="form-label"
        v-text="`Opiniones:`"
      />
      <textarea
        required
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="Tu opinion debe ir aquí..."
        v-model.trim="inputOpinion"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "BodyForm",
  props: ["nombre", "opinion"],
  computed: {
    inputNombre: {
      get() {
        return this.nombre;
      },
      set(newValue) {
        this.$emit("update:nombre", newValue);
      },
    },
    inputOpinion: {
      get() {
        return this.$props.opinion;
      },
      set(newValue) {
        this.$emit("update:opinion", newValue);
      },
    },
  },
};
</script>