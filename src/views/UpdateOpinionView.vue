<template>
  <form id="UpdateOpinionView" @submit.prevent="updateOpinion">
    <h1 class="text-center" v-text="`Editando la opinión de: ${this.game}`" />
    <body-form :nombre.sync="name" :opinion.sync="opinion" />
    <button
      type="button"
      class="btn btn-secondary"
      v-text="`Regresar`"
    />
    <button
      type="submit"
      class="btn btn-primary"
      v-text="`Guardar`"
      :disabled="!validateInput"
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
  data() {
    return {
      name: "",
      opinion: "",
      game: "",
    };
  },
  computed: {
    ...mapGetters(["opinionByIndex"]),
    validateInput() {
      return [this.name, this.opinion].every((text) => /\w+/.test(text));
    },
  },
  methods: {
    setOpinion() {
      const { name, opinion, game } = this.opinionByIndex(this.index);
      this.name = name;
      this.opinion = opinion;
      this.game = game;
    },
    clearInputs() {
      this.name = "";
      this.opinion = "";
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
        }) &&
        this.clearInputs();
    },
  },
  watch: {
    index() {
      this.setOpinion();
    },
  },
  // components: {},
  // mixins: [],
  // filters: {},
  created() {
    this.setOpinion();
  },
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style lang="scss" scoped>
</style>