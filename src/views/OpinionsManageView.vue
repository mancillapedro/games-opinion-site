<template>
  <section id="OpinionsManageView">
    <h1 class="text-center" v-text="`Administrando la Lista de Opiniones`" />
    <div v-if="opinions[0]" class="table-responsive-lg">
      <table class="table table-borderless table-hover">
        <thead>
          <tr>
            <th
              scope="col"
              v-for="(title, indexTitle) in headTable"
              :key="indexTitle"
              v-text="title"
            />
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          <tr v-for="(opinion, indexOpinion) in opinions" :key="indexOpinion">
            <th scope="row" v-text="indexOpinion + 1" />
            <td v-text="opinion.name" />
            <td v-text="opinion.game" />
            <td v-text="opinion.opinion" />
            <td class="d-flex justify-content-around">
              <button
                type="button"
                class="btn btn-danger"
                v-text="`Eliminar`"
                @click="removeOpinion(indexOpinion)"
              />
              <button type="button" class="btn btn-primary" v-text="`Editar`" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      v-else
      class="alert alert-danger"
      role="alert"
      v-text="`No existen opiniones por administrar.`"
    />
  </section>
</template>

<script>
import { /*mapActions,*/ mapState } from "vuex";
export default {
  name: "OpinionsManageView",
  // props: {},
  data() {
    return {
      headTable: ["#", "Persona", "Juego", "Opinion"],
    };
  },
  computed: {
    ...mapState(["opinions"]),
  },
  methods: {
    // ...mapActions(["removeOpinion"]),
    removeOpinion(index) {
      confirm("confirma?") && this.$store.dispatch("removeOpinion", index);
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

<style lang="scss" scoped></style>