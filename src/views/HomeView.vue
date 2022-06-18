<template>
  <section id="Home" class="pb-5">
    <h1 class="text-center mb-5" v-text="`Lista de Juegos Disponibles`" />
    <div class="row row-cols-1 row-cols-md-3 g-2 g-md-5">
      <div
        class="col"
        v-for="game in games"
        :key="game.id"
        @click.stop="setNameGame(game.name)"
      >
        <card-game
          :name="game.name"
          :rating="game.rating"
          :released="game.released"
          :updated="game.updated"
          :image="game.background_image"
        />
      </div>
      <router-view :nameGame="nameGame" />
    </div>
  </section>
</template>

<script>
import CardGame from "@/components/CardGame.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: { CardGame },
  data: () => ({ nameGame: "" }),
  computed: { ...mapState(["games"]) },
  methods: {
    setNameGame(name) {
      this.nameGame = name;
    },
  },
};
</script>
