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
      class="btn btn-info"
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
  data: () => ({ name: "", opinion: "", game: "" }),
  computed: {
    ...mapGetters(["opinionByIndex"]),
    validateInput() {
      return /\w+/.test(this.name) && /\w+/.test(this.opinion);
    },
  },
  methods: {
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
        })
      this.volver();
    },
  },
  watch: {
    index() {
      this.setOpinion();
    },
  },
  created() {
    this.setOpinion();
  },
};
</script>
