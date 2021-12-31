<template>
  <div class="wrapper__pokemon" @click="onePokemon(data_pokemon.url)">
    <div class="pokemon__name">
      <h3>
        {{ data_pokemon.name }}
      </h3>
    </div>
    <div class="pokemon__favorite" @click.stop="setFavorite(data_pokemon.name)">
      <Star :fill="data_pokemon.is_favorite ? '#ECA539' : '#BFBFBF'" />
    </div>
  </div>
</template>

<script>
import Star from "@/assets/icons/star.vue";
export default {
  name: "itemPokemon",
  props: {
    data_pokemon: Object,
  },
  components: {
    Star,
  },
  methods: {
    onePokemon(url) {
      this.$store.dispatch("GET_ONE_POKEMON", url);
      this.openModal();
    },
    openModal() {
      this.$store.commit("OPEN_MODAL");
    },
    setFavorite(name) {
      this.$store.commit("SET_FAVORITE_POKEMON", name);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper__pokemon {
  background-color: #fff;
  display: flex;
  padding: 5px 10px;
  border-radius: 5px;
  justify-content: space-between;
  cursor: pointer;
  .pokemon__name {
    display: flex;
    align-items: center;
    h3 {
      font-size: 22px;
      font-weight: 500;
    }
  }
  h3:first-letter {
    text-transform: uppercase;
  }
  .pokemon__favorite {
    background-color: #f5f5f5;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
  }
}
</style>
