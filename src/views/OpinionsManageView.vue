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
    <update-opinion-view v-if="updateForm.show" :index="newindex"/>
  </section>
</template>

<script>
import TableManageOpinions from "@/components/TableManageOpinions.vue";
import { mapState } from "vuex";
import UpdateOpinionView from './UpdateOpinionView.vue';

export default {
  components: { TableManageOpinions, UpdateOpinionView },
  name: "OpinionsManageView",
  // props: {},
  data() {
    return {
      updateForm: {
        show: false,
        indexOpinion: null,
      },
    };
  },
  computed: {
    ...mapState(["opinions"]),
    newindex(){
      return this.updateForm.indexOpinion
    }
  },
  methods: {
    removeOpinion(index) {
      confirm("confirma?") && this.$store.dispatch("removeOpinion", index);
    },
    updateOpinion(index) {
      this.updateForm.show = true
      this.updateForm.indexOpinion = index
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