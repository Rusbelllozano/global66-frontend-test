<template>
  <div class="home">
    <div class="content__logo">
      <img class="pikachu" src="../assets/images/Pikachu.png" />
      <img class="circle" src="../assets/images/Red.png" />
    </div>
    <div class="content__text">
      <h3>Welcomee to Pokedex</h3>
      <p>
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
      <router-link to="/list-pokemon">Get started</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>
.home {
  display: grid;
  justify-content: center;
  justify-items: center;
}
.content__logo {
  position: relative;
  display: flex;
  justify-content: center;
  width: 300px;
  height: 300px;
  .pikachu {
    position: absolute;
    bottom: -11px;
    z-index: 2;
    left: -3px;
  }
  .circle {
    width: 210px;
    height: 210px;
    position: absolute;
    bottom: 0;
  }
}
.content__text {
  margin-top: 50px;
  h3 {
    margin: 5px 0;
  }
  p {
    margin-bottom: 50px;
    text-align: center;
  }
  a {
    margin-top: 50px;
    text-decoration: none;
    color: #fff;
    background-color: #f22539;
    border-radius: 30px;
    padding: 10px;
    font-weight: 600;
    transition: 0.5s;
  }
  a:hover{
    background-color: #C00E20;
  }
}
</style>
