<script>
import { store } from "../data/store.js";
// import AppHero from "./subComponentHeader/AppHero.vue";

export default {
  data() {
    return {
      store,
      title: "HEADER",
    };
  },
  methods: {
    active(index) {
      for (const link in this.links) {
        link == index
          ? (this.links[link].active = true)
          : (this.links[link].active = false);
      }
    },
  },
  components: {
    // AppHero,
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style lang="scss" scoped>
// MIXINS
@use "../style/subStyle/mixins.scss" as *;
// VARIABLE
@use "../style/subStyle/variable.scss" as *;
</style>
