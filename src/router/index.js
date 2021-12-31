import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list-pokemon",
    name: "ListPokemon",
    component: () =>
      import(
        /* webpackChunkName: "ListPokemons" */ "../views/ListPokemons.vue"
      ),
  },
  {
    path: "/favorites",
    name: "FavoritesPokemon",
    component: () =>
      import(/* webpackChunkName: "Favorites" */ "../views/ListPokemons.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
