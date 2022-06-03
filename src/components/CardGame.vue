<template>
  <article class="card">
    <img :src="image" class="card-img-top" :alt="`Portada del juego ${name}`" />
    <div class="card-body">
      <h5 class="card-title" v-text="name" />
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-text="'Rating: ' + rating" />
      <li class="list-group-item" v-text="'Released: ' + released" />
      <li class="list-group-item" v-text="'Updated: ' + updated" />
    </ul>
    <div class="card-body">
      <button type="button" class="btn btn-primary" v-text="`Opinar`" />
    </div>
  </article>
</template>

<script>
export default {
  name: "CardGame",
  props: ["name", "rating", "released", "updated", "image"],
  // data(){}
  // computed: {},
  //   methods: {}
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