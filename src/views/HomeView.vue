<template>
  <section class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="(game, indexGame) in games" :key="indexGame">
      <card-game
        :name="game.name"
        :rating="game.rating"
        :released="game.released"
        :updated="game.updated"
        :image="game.background_image"
      />
    </div>
  </section>
</template>

<script>
import CardGame from "@/components/CardGame.vue";
import { mapState } from "vuex";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    CardGame,
  },
  computed: {
    ...mapState(["games"]),
  },
};
</script>
