<template>
  <div
    class="modal fade"
    id="OpinionNew"
    tabindex="-1"
    aria-labelledby="OpinionNewLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <form class="modal-content" @submit.prevent="addOpinion">
        <div class="modal-header">
          <h5 class="modal-title" id="OpinionNewLabel" v-text="titleModal" />
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click.stop="clearInputs"
          />
        </div>
        <div class="modal-body">
          <body-form :nombre.sync="nombre" :opinion.sync="opinion" />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            v-text="`Cerrar`"
            @click.stop="clearInputs"
          />
          <button
            type="submit"
            class="btn btn-primary"
            v-text="`Guardar`"
            v-bind="validateInput && { 'data-bs-dismiss': 'modal' }"
            :disabled="!validateInput"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BodyForm from "@/components/BodyForm.vue";

export default {
  components: { BodyForm },
  name: "ModalWithForm",
  props: ["nameGame", "idModal"],
  data: () => ({
    nombre: "",
    opinion: "",
  }),
  computed: {
    titleModal() {
      return `Escribe tu opinion para el juego: ${this.nameGame}`;
    },
    validateInput() {
      return /\w+/.test(this.nombre) && /\w+/.test(this.opinion);
    },
  },
  methods: {
    clearInputs() {
      this.nombre = "";
      this.opinion = "";
    },
    addOpinion() {
      this.validateInput &&
        this.$store.dispatch("addOpinion", {
          name: this.nombre,
          game: this.nameGame,
          opinion: this.opinion,
        }) &&
        this.clearInputs();
    },
  },
};
</script>