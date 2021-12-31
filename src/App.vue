<template>
  <div class="wrapper__principal">
    <router-view />
  </div>
  <ModalPokemon  v-if="$store.state.show_modal"/>
</template>
<script>
import ModalPokemon from "@/components/ModalPokemon.vue";
export default {
  components: {
    ModalPokemon,
  },
  mounted() {
    if (!this.$store.state.list_pokemons.length) {
      this.$store.dispatch("GET_ALL_POKEMONS");
    }
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.wrapper__principal {
  display: grid;
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #353535;
  padding: 0;
  background-color: #E5E5E5;
  min-height: 100vh;
}
</style>
