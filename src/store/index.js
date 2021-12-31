import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    list_pokemons: [],
    selected_pokemon: {},
    show_modal: false,
  },
  mutations: {
    SET_LIST_POKEMONS(state, list) {
      state.list_pokemons = list.map((pokemon) => {
        return { ...pokemon, is_favorite: false };
      });
    },
    SET_ONE_POKEMON(state, pokemon) {
      let favorite = state.list_pokemons.find(
        (selected) => selected.name == pokemon.name && selected.is_favorite
      );
      state.selected_pokemon = favorite
        ? { ...pokemon, is_favorite: true }
        : { ...pokemon, is_favorite: false };
    },
    OPEN_MODAL(state) {
      state.show_modal = !state.show_modal;
    },
    SET_FAVORITE_POKEMON(state, name) {
      let favorite = state.list_pokemons.find(
        (selected) => selected.name == name
      );
      if (state.selected_pokemon) {
        state.selected_pokemon.is_favorite =
          !state.selected_pokemon.is_favorite;
      }
      favorite.is_favorite = !favorite.is_favorite;
    },
  },
  actions: {
    async GET_ALL_POKEMONS({ commit }) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${process.env.VUE_APP_POKE_API_URL}/pokemon/`,
        });
        setTimeout(() => {
          commit("SET_LIST_POKEMONS", data.results);
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    },
    async GET_ONE_POKEMON({ commit }, url) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${url}`,
        });
        commit("SET_ONE_POKEMON", data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  modules: {},
});
