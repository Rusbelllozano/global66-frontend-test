<template>
  <div class="nose">
    <div class="view__list">
      <SearchBar :text="textSearch" @textSearch="setTextSearch" />
      <div class="content__list" v-if="list_pokemons.length">
        <ItemPokemon
          v-for="(pokemon, index) in list_pokemons"
          :key="index"
          :data_pokemon="pokemon"
        />
      </div>
      <div
        class="notFound__view"
        v-else-if="
          (textSearch && !list_pokemons.length) || $route.path === '/favorites'
        "
      >
        <h3>Uh-oh!</h3>
        <div v-if="$route.path === '/favorites'">
          <p>You should choose some favorite pokemon</p>
          <router-link class="nav__button" to="/list-pokemon"
            >Go back to list</router-link
          >
        </div>
        <div v-else>
          <p>You look lost on your journey!</p>
          <div class="nav__button" @click="setTextSearch('')">Go back home</div>
        </div>
      </div>
      <div class="loading__view" v-else>
        <img class="rotate-center" src="../assets/images/Loader.png" alt="" />
      </div>
      <NavBar />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemPokemon from "@/components/ItemPokemon.vue";
import SearchBar from "@/components/SearchBar.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Home",
  components: {
    ItemPokemon,
    SearchBar,
    NavBar,
  },
  data() {
    return {
      textSearch: "",
    };
  },
  methods: {
    setTextSearch(value) {
      this.textSearch = value;
    },
  },
  computed: {
    list_pokemons() {
      if (this.$route.path === "/favorites" && this.textSearch) {
        let favorites = this.$store.state.list_pokemons.filter(
          (pokemon) => pokemon.is_favorite
        );
        return favorites.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(this.textSearch.toLowerCase())
        );
      } else if (this.$route.path === "/favorites") {
        return this.$store.state.list_pokemons.filter(
          (pokemon) => pokemon.is_favorite
        );
      } else if (this.textSearch) {
        return this.$store.state.list_pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(this.textSearch.toLowerCase())
        );
      } else {
        return this.$store.state.list_pokemons;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.view__list {
  display: grid;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
.content__list {
  display: grid;
  gap: 10px;
  padding-top: 20px;
  max-width: 800px;
}
.notFound__view {
  display: grid;
  justify-content: center;
  justify-items: center;
  padding: 100px;
  .nav__button {
    width: 100px;
    padding: 10px;
    margin-top: 30px;
    border-radius: 30px;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #f22539;
  }
}
.loading__view {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  left: 0;
  bottom: 0;
}
.rotate-center {
  width: 100px;
  height: 100px;
  -webkit-animation: rotate-center 0.8s ease-in-out infinite both;
  animation: rotate-center 0.88s ease-in-out infinite both;
}
@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
