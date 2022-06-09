<template>
  <div class="table-responsive-lg">
    <table id="TableManageOpinions" class="table table-borderless table-hover">
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
        <tr
          v-for="(opinion, indexOpinion) in opinions"
          :key="indexOpinion"
        >
          <th scope="row" v-text="indexOpinion + 1" />
          <td v-text="opinion.name" />
          <td v-text="opinion.game" />
          <td v-text="opinion.opinion" />
          <td class="d-flex justify-content-around">
            <button
              type="button"
              class="btn btn-danger"
              v-text="`Eliminar`"
              @click="eliminar(indexOpinion)"
            />
            <button
              type="button"
              class="btn btn-primary"
              v-text="`Editar`"
              @click="editar(indexOpinion)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableManageOpinions",
  props: {
    opinions: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      headTable: ["#", "Persona", "Juego", "Opinion"],
    };
  },
  // computed: {},
  methods: {
    eliminar(index) {
      this.$emit("eliminar", index);
    },
    editar(index) {
      this.$emit("editar", index);
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
</style>