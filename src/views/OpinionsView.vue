<template>
  <section id="OpinionsView">
    <h1 class="text-center" v-text="`Lista de Opiniones`" />
    <div class="accordion" id="accordionExample">
      <div class="accordion-item" v-for="(opinion, i) in opinions" :key="i">
        <h2 class="accordion-header" :id="i">
          <button
            class="accordion-button bg-ligth"
            :class="{ collapsed: i != 0 }"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + i"
            :aria-expanded="i == 0"
            :aria-controls="'collapse' + i"
            v-text="accordionButton(opinion.name, opinion.game)"
          />
        </h2>
        <div
          :id="'collapse' + i"
          class="accordion-collapse collapse"
          :class="{ show: i == 0 }"
          :aria-labelledby="i"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>Opinion: </strong> {{ opinion.opinion }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="!opinions[0]"
      class="alert alert-danger"
      role="alert"
      v-text="`No existen opiniones por mostrar.`"
    />
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "OpinionsView",
  // props: {},
  // data(){}
  computed: {
    ...mapState(["opinions"]),
  },
  methods: {
    accordionButton(name, game) {
      return `Opinión creada por: ${name}. Para el juego: ${game}`;
    },
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style lang="scss" scoped>
.collapsed {
  background-color: rgba(150, 150, 255, 0.05);
}
</style>