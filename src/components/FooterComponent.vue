<template>
  <div
    v-if="alert"
    id="FooterComponent"
    class="
      alert alert-dismissible
      fade
      show
      fixed-bottom
      max-content
      ms-auto
      me-3
    "
    :class="`alert-${type}`"
    role="alert"
  >
    {{ message }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      @click="alert = !alert"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FooterComponent",
  data: () => ({
    alert: false,
    type: "",
    message: "",
  }),
  computed: {
    ...mapGetters(["opinionsChange"]),
  },
  watch: {
    opinionsChange(newValue, oldValue) {
      this.alert = true;
      if (newValue.size > oldValue.size) {
        this.type = "success";
        this.message = "Nueva opinion agregada!";
      } else if (newValue.size < oldValue.size) {
        this.type = "danger";
        this.message = "La opinion fue eliminada con éxito!";
      } else {
        this.type = "warning";
        this.message = "La opinion fue editada con éxito!";
      }
    },
  },
};
</script>