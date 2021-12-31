<template>
  <div class="search__bar">
    <Search />
    <input v-model="textSearch" type="text" placeholder="Search" />
  </div>
</template>
<script>
import Search from "@/assets/icons/search.vue";
export default {
  components: {
    Search,
  },
  props: ["text"],
  data() {
    return {
      textSearch: this.text,
    };
  },
  watch: {
    textSearch(value) {
      this.$emit("textSearch", value);
    },
  },
};
</script>
<style lang="scss" scoped>
.search__bar {
  height: 30px;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 10px;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
  }
  input:-ms-input-placeholder {
    color: #bfbfbf;
  }
}
</style>
