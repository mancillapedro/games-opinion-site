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
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#OpinionNew"
        v-text="`Opinar`"
      />
    </div>
  </article>
</template>

<script>
export default {
  name: "CardGame",
  props: ["name", "rating", "released", "updated", "image"],
};
</script>

<style lang="scss" scoped>
img {
  height: 30vh;
  object-fit: cover;
  object-position: top;
}
</style>