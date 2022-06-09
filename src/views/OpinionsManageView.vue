<template>
  <section id="OpinionsManageView">
    <h1 class="text-center" v-text="`Administrando la Lista de Opiniones`" />
    <table-manage-opinions
      v-if="opinions[0]"
      :opinions="opinions"
      @eliminar="removeOpinion"
      @editar="updateOpinion"
    />
    <div
      v-else
      class="alert alert-danger"
      role="alert"
      v-text="`No existen opiniones por administrar.`"
    />
  </section>
</template>

<script>
import TableManageOpinions from "@/components/TableManageOpinions.vue";
import { mapState } from "vuex";

export default {
  components: { TableManageOpinions },
  name: "OpinionsManageView",
  // props: {},
  data() {
    return {
      showForm: false,
    };
  },
  computed: {
    ...mapState(["opinions"]),
  },
  methods: {
    removeOpinion(index) {
      confirm("confirma?") && this.$store.dispatch("removeOpinion", index);
    },
    updateOpinion(index) {
      // confirm("confirma?") && this.$store.dispatch("removeOpinion", index);
      console.log(index);
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