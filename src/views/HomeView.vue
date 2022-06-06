<template>
  <section class="row row-cols-1 row-cols-md-3 g-4">
    <div
      class="col"
      v-for="(game, indexGame) in games"
      :key="indexGame"
      @click.stop="changeTitleModal(game.name)"
    >
      <card-game
        :name="game.name"
        :rating="game.rating"
        :released="game.released"
        :updated="game.updated"
        :image="game.background_image"
        :buttonModal="buttonModal"
      />
    </div>
    <modal-with-form :nameGame="titleModal" />
  </section>
</template>
<script>
import CardGame from "@/components/CardGame.vue";
import ModalWithForm from "@/components/ModalWithForm.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    CardGame,
    ModalWithForm,
  },
  data() {
    return {
      buttonModal: `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Opinar</button>`,
      titleModal: "",
    };
  },
  computed: {
    ...mapState(["games"]),
  },
  methods: {
    changeTitleModal(name) {
      this.titleModal = name;
    },
  },
};
</script>
