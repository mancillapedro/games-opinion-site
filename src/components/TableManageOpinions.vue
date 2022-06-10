<template>
  <div class="table-responsive-lg">
    <h1 class="text-center" v-text="`Administrando la Lista de Opiniones`" />
    <table v-if="opinions[0]" id="TableManageOpinions" class="table table-borderless table-hover">
      <thead>
        <tr>
          <th
            scope="col"
            v-for="(title, indexTitle) in headTable"
            :key="indexTitle"
            v-text="title"
          />
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
              @click="eliminar(indexOpinion)"
            />
            <button
              type="button"
              class="btn btn-info"
              v-text="`Editar`"
              @click="editar(indexOpinion)"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-else
      class="alert alert-danger"
      role="alert"
      v-text="`No existen opiniones por administrar.`"
    />
  </div>
</template>

<script>
export default {
  name: "TableManageOpinions",
  props: ["opinions"],
  data: () => ({ headTable: ["#", "Persona", "Juego", "Opinion", ""] }),
  methods: {
    eliminar(index) {
      this.$emit("eliminar", index);
    },
    editar(index) {
      this.$emit("editar", index);
    },
  },
};
</script>