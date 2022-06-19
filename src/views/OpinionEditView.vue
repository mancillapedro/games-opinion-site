<template>
  <form id="UpdateOpinionView" @submit.prevent="updateOpinion">
    <h1 class="text-center" v-text="`Editando la opinión de: ${this.game}`" />
    <body-form :nombre.sync="name" :opinion.sync="opinion" />
    <button
      type="button"
      class="btn btn-primary"
      v-text="`Regresar`"
      @click="volver"
    />
    <button
      type="submit"
      class="btn btn-info ms-5"
      v-text="`Guardar`"
      :disabled="btnDisabled || !validateInput"
    />
  </form>
</template>

<script>
import BodyForm from "@/components/BodyForm.vue";
import { mapGetters } from "vuex";

export default {
  components: { BodyForm },
  name: "UpdateOpinionView",
  props: ["index"],
  data: () => ({ name: "", opinion: "", game: "", btnDisabled: true }),
  computed: {
    ...mapGetters(["opinionByIndex"]),
    validateInput() {
      return /\w+/.test(this.name) && /\w+/.test(this.opinion);
    },
  },
  methods: {
    changeDisabled(oldValue) {
      if (!oldValue) return (this.btnDisabled = true);
      this.btnDisabled = false;
    },
    setOpinion() {
      const { name, opinion, game } = this.opinionByIndex(this.index);
      this.name = name;
      this.opinion = opinion;
      this.game = game;
    },
    volver() {
      this.$emit("volver", true);
    },
    updateOpinion() {
      this.validateInput &&
        this.$store.dispatch("updateOpinion", {
          index: this.index,
          opinion: {
            name: this.name,
            game: this.game,
            opinion: this.opinion,
          },
        });
      this.volver();
    },
  },
  watch: {
    index() {
      this.setOpinion();
    },
    opinion(_, oldValue) {
      this.changeDisabled(oldValue);
    },
    name(_, oldValue) {
      this.changeDisabled(oldValue);
    },
  },
  created() {
    this.setOpinion();
  },
};
</script>
