<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">

      <form class="modal-content" @submit="addOpinion">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel" v-text="titleModal" />
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>

        <div class="modal-body">
          <div class="mb-3">
            <label
              for="exampleFormControlInput1"
              class="form-label"
              v-text="`Nombre:`"
            />
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="nombre"
              placeholder="Evan you"
            />
          </div>
          <div class="mb-3">
            <label
              for="exampleFormControlTextarea1"
              class="form-label"
              v-text="`Opiniones:`"
            />
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              v-model="opinion"
              placeholder="Tu opinion debe ir aquí..."
            />
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            v-text="`Cerrar`"
          />
          <button type="submit" class="btn btn-primary" v-text="`Guardar`" />
        </div>
      </form>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWithForm",
  props: ["nameGame"],
  data() {
    return {
      nombre: "",
      opinion: "",
    };
  },
  computed: {
    titleModal() {
      return `Escribe tu opinion para el juego: ${this.nameGame}`;
    },
  },
  methods: {
    addOpinion() {},
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style lang="scss" scoped>
</style>