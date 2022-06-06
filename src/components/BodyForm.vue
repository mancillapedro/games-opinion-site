<template>
  <ul id="BodyForm">
    <li class="mb-3">
      <label
        for="exampleFormControlInput1"
        class="form-label"
        v-text="`Nombre:`"
      />
      <input
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
  props:['nombre', 'opinion'],
  // data() {   return {};  },
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
ul {
  padding: 0;
  li {
    list-style: none;
  }
}
</style>