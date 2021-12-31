<template>
  <div class="modaloverlay">
    <div class="modal">
      <a @click="closeModal()" class="close">&times;</a>
      <div class="background__pokemon">
        <img :src="selected_pokemon.sprites.front_default" alt="" />
      </div>
      <div class="modal__content">
        <div class="modal__list-attr">
          <div class="item__list">
            <h3>Name:</h3>
            <p>{{ selected_pokemon.name }}</p>
          </div>
          <div class="item__list">
            <h3>Height:</h3>
            <p>{{ selected_pokemon.height }}</p>
          </div>
          <div class="item__list">
            <h3>Weight:</h3>
            <p>{{ selected_pokemon.weight }}</p>
          </div>
          <div class="item__list">
            <h3>Types:</h3>
            <p v-for="type in selected_pokemon.types" :key="type.slote">
              {{ type.type.name }}
            </p>
          </div>
        </div>
        <div class="modal__buttons">
          <div @click="copyToClipboard()" class="modal__button-share">
            Share to my friends
          </div>
          <div
            class="modal__button-favorite"
            @click="setFavorite(selected_pokemon.name)"
          >
            <Star
              :fill="selected_pokemon.is_favorite ? '#ECA539' : '#BFBFBF'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from "@/assets/icons/star.vue";
export default {
  name: "itemPokemon",
  components: {
    Star,
  },
  methods: {
    onePokemon(url) {
      this.$store.dispatch("GET_ONE_POKEMON", url);
    },
    closeModal() {
      this.$store.commit("OPEN_MODAL");
    },
    setFavorite(name) {
      this.$store.commit("SET_FAVORITE_POKEMON", name);
    },
    copyToClipboard() {
      navigator.clipboard.writeText(
        this.selected_pokemon.name +
          "," +
          this.selected_pokemon.height +
          "," +
          this.selected_pokemon.weight
      );
    },
  },
  computed: {
    selected_pokemon() {
      return this.$store.state.selected_pokemon;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modaloverlay {
  background: rgba(0, 0, 0, 0.8);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  align-content: center;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  z-index: 9999;
  .modal {
    background-color: white;
    // height: 90%;
    width: 80%;
    position: relative;
    margin: 50px auto;
    @media (min-width: 60em) {
      height: 70%;
      margin: 5% auto;
      max-height: 57em;
      max-width: 66em;
      width: 50%;
    }
  }
  .close {
    background-color: #fff;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(122, 205, 219);
    font-weight: 900;
    font-size: 30px;
    padding: 5px;
    border-radius: 50%;
    position: absolute;
    right: 5px;
    text-align: center;
    text-decoration: none;
    top: 5px;
    z-index: 1;
  }
}
.background__pokemon {
  background-image: url("../assets/images/Background.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  position: relative;
  img {
    width: 200px;
    margin-top: 100px;
  }
}
.modal__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  .modal__button-share {
    padding: 10px 15px;
    border-radius: 30px;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #f22539;
    border: none;
    cursor: pointer;
  }
  @media (max-width: 60em) {
    padding: 0;
  }
  .modal__button-favorite {
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
.modal__content {
  padding: 10px 30px;
}
.modal__list-attr {
  display: grid;
  width: 100%;
  .item__list {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-bottom: 1px solid #E8E8E8;
  }
}
</style>
