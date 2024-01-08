<script>
import { store } from "../data/store.js";

export default {
  data() {
    return {
      store,
      active: 0,
      projectX: {},
    };
  },

  methods: {
    changeImage() {
      if (this.active >= this.project.images.length - 1) {
        this.active = -1;
      }
      this.active += 1;
      // console.log(this.project.images.length);
    },
  },

  components: {},

  props: {
    project: Object,
  },
  created() {
    window.setInterval(() => {
      if (this.project && this.project.images) {
        this.changeImage();
      }
    }, 3000);
  },
};
</script>

<template>
  <!-- CARD DESKTOP -->
  <div v-if="project && project.images">
    <div v-for="(image, index) in project.images" class="box">
      <img
        v-show="index == active"
        :src="'http://127.0.0.1:8000/storage/' + image.filename"
        class="card-img-top slide-left"
        alt="..."
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  overflow: hidden;
}
.card img {
  transition: all 3s;
  height: 250px;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
}

.slide-left {
  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes slide-left {
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  0% {
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
  }
}
</style>
