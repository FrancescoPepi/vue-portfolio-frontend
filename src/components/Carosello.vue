<script>
// import AppPromoter from "./subComponentMain/AppPromoter.vue";
// import AppCall from "./subComponentMain/AppCall.vue";
// import AppCourses from "./subComponentMain/AppCourses.vue";
// import AppInstructors from "./subComponentMain/AppInstructors.vue";
// import AppTestimonials from "./subComponentMain/AppTestimonials.vue";
// import AppNews from "./subComponentMain/AppNews.vue";
// import AppNewsLetter from "./subComponentMain/AppNewsLetter.vue";
import { store } from "../data/store.js";

export default {
  data() {
    return {
      store,
      active: 0,
    };
  },

  methods: {
    changeImage() {
      if (this.active >= this.project.images.length - 1) {
        this.active = -1;
      }
      this.active += 1;
    },
  },

  components: {},

  props: {
    project: Object,
  },
  created() {
    window.setInterval(() => {
      this.changeImage();
    }, 3000);
  },
};
</script>

<template>
  <!-- CARD DESKTOP -->
  <div v-for="(image, index) in this.project.images">
    <img
      v-show="index == active"
      :src="'http://127.0.0.1:8000/storage/' + image.filename"
      class="card-img-top"
      alt="..."
    />
  </div>
</template>

<style lang="scss" scoped>
.card img {
  height: 250px;
  object-fit: cover;
}
</style>
