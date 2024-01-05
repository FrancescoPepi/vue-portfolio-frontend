<script>
import { store } from "../data/store.js";
// import AppFooterTop from "./subComponentsFooter/AppFooterTop.vue";
// import AppFooterBottom from "./subComponentsFooter/AppFooterBottom.vue";

export default {
  data() {
    return {
      store,
      title: "FOOTER",
    };
  },

  components: {
    // AppFooterTop,
    // AppFooterBottom,
  },
};
</script>

<template>
  <div class="container mt-5">
    <div data-aos="fade-up" data-aos-easing="ease-in-sine">
      <span class="my-5 text-center mx-auto"></span>

      <ul class="p-0 d-flex justify-content-center">
        <li v-for="link in store.links" class="list-group-item">
          <a
            class="icon-link icon-link-hover link-underline-dark"
            style="--bs-icon-link-transform: translate3d(0, -0.165rem, 0)"
            :href="link.url"
          >
            <font-awesome-icon :icon="link.icon" size="2xl" />
            <i class="bi" aria-hidden="true">
              <use xlink:href="#box-seam"></use
            ></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 150px;
  span {
    width: 90%;
    display: block;
    border: 2px solid rgba(93, 93, 93, 0.405);
    border-radius: 25px;
  }
  a {
    color: rgba(192, 192, 192, 0.912);
  }
  li:hover a {
    color: rgb(255, 255, 255);
  }
}
</style>
