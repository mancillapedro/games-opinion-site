<template>
  <div class="home">
    <card-game :game="games[0]" />
  </div>
</template>

<script>
import CardGame from '@/components/CardGame.vue'
import { mapState } from 'vuex'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    CardGame
  },
  computed:{
    ...mapState(['games'])
  }
}
</script>
