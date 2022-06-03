<template>
  <div id="CardGame" class="text-primary">
    {{ game }}
    {{ game.background_image }}
    {{ game.name }}
    {{ game.rating }}
    {{ game.released }}
    {{ game.updated }}
    <h1 v-text="`CardGame`" />
  </div>
</template>

<script>
export default {
  name: "CardGame",
  props: {
    game: {
      type: Object,
      require: true,
      default() {
        return {};
      },
    },
  },
  // data(){}
  // computed: {},
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
</style>