<template>
  <section id="OpinionsManageView">
    <router-view v-if="showEdit" :index="indexOpinion" @volver="volver" />
    <table-manage-opinions
      v-else
      :opinions="opinions"
      @eliminar="removeOpinion"
      @editar="updateOpinion"
    />
  </section>
</template>

<script>
import TableManageOpinions from "@/components/TableManageOpinions.vue";
import { mapState } from "vuex";

export default {
  components: { TableManageOpinions },
  name: "OpinionsManageView",
  data: () => ({ showEdit: false, indexOpinion: null }),
  computed: { ...mapState(["opinions"]) },
  methods: {
    removeOpinion(index) {
      confirm("confirma?") && this.$store.dispatch("removeOpinion", index);
    },
    updateOpinion(index) {
      this.showEdit = true;
      this.indexOpinion = index;
    },
    volver(confirm) {
      this.showEdit = !confirm;
    },
  },
};
</script>