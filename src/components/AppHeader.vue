<script>
import { store } from "../data/store.js";
// import AppHero from "./subComponentHeader/AppHero.vue";

export default {
  data() {
    return {
      store,
      title: "HEADER",
      img: "/logo.png",
    };
  },
  methods: {
    // active(index) {
    //   for (const link in this.links) {
    //     link == index
    //       ? (this.links[link].active = true)
    //       : (this.links[link].active = false);
    //   }
    // },
  },
  components: {
    // AppHero,
  },
};
</script>

<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img :src="img" alt="Bootstrap" width="100"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-aos="flip-up"
                data-aos-delay="250"
                aria-current="page"
                href="#"
                >HOME</a
              >
            </li>
            <!-- <li class="nav-item">
              <a
                class="nav-link"
                data-aos="flip-up"
                data-aos-delay="300"
                href="#"
                >ABOUT ME</a
              >
            </li> -->
            <li class="nav-item">
              <a
                class="nav-link"
                data-aos="flip-up"
                data-aos-delay="350"
                href="#"
                >PROJECTS</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-aos="flip-up"
                data-aos-delay="400"
                href="#"
                >CONTACT</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
// MIXINS
@use "../style/subStyle/mixins.scss" as *;
// VARIABLE
@use "../style/subStyle/variable.scss" as *;

.navbar-collapse {
  flex-grow: 0 !important;
}
.navbar a {
  color: rgb(145, 145, 145) !important;
  &:hover {
    color: rgb(239, 239, 239) !important;
  }
  &.active {
    color: rgb(239, 239, 239) !important;
  }
}
</style>
