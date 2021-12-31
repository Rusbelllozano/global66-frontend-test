<template>
  <div class="nav">
    <router-link class="nav__button" to="/list-pokemon">
      <List />
      All
    </router-link>
    <router-link class="nav__button" to="/favorites">
      <Star fill="#fff" />
      Favorites
    </router-link>
  </div>
</template>
<script>
import Star from "@/assets/icons/star.vue";
import List from "@/assets/icons/list.vue";
export default {
  components: {
    Star,
    List
  },
};
</script>
<style lang="scss" scoped>
.nav {
  background-color: #fff;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px 5px;
  margin-top: 20px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  .nav__button {
    width: 100px;
    padding: 10px;
    border-radius: 30px;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #bfbfbf;
    &.router-link-exact-active {
      background-color: #f22539;
    }
  }
}
</style>
