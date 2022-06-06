<template>
  <div id="OpinionsView">
    <h1 v-text="`OpinionsView`" />
    <h2>{{opinions}}</h2>
  </div>
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