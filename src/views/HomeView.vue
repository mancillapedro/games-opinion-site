<template>
  <section>
    <h1 class="text-center mb-5" v-text="`Lista de Juegos Disponibles`"/>
    <div class="row row-cols-1 row-cols-md-3 g-2 g-md-5">
      <div
        class="col"
        v-for="game in games"
        :key="game.id"
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
      <modal-with-form :idModal="idModal" :nameGame="titleModal" />
    </div>
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
      idModal: "ModalWithForm",
      titleModal: "",
    };
  },
  computed: {
    ...mapState(["games"]),
    buttonModal() {
      return `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${this.idModal}">Opinar</button>`;
    },
  },
  methods: {
    changeTitleModal(name) {
      this.titleModal = name;
    },
  },
};
</script>
