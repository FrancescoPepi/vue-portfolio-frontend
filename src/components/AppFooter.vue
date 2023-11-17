<script>
// import AppFooterTop from "./subComponentsFooter/AppFooterTop.vue";
// import AppFooterBottom from "./subComponentsFooter/AppFooterBottom.vue";

export default {
  data() {
    return {
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
    <h1 data-aos="fade-up" data-aos-easing="ease-in-sine">
      {{ title }}
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 150px;
}
</style>
