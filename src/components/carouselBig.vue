<script>
import { store } from "../data/store.js";

export default {
  data() {
    return {
      store,
      active: 0,
      projectX: {},
      interval: null,
    };
  },

  methods: {
    changeImage() {
      if (this.active >= this.project.images.length - 1) {
        this.active = -1;
      } else if (this.active < 0) {
        this.active = this.project.images.length - 1;
      }
      this.active += 1;
    },
    changeNext() {
      if (this.active >= this.project.images.length - 1) {
        this.active = -1;
      }
      this.active += 1;
    },
    changeBack() {
      if (this.active <= 0) {
        this.active = this.project.images.length - 1;
      }
      this.active -= 1;
    },
    startTimer() {
      if (!this.interval) {
        this.interval = setInterval(() => {
          if (this.project && this.project.images) {
            this.changeImage();
          }
        }, 3000);
      }
    },
    stopTimer() {
      clearInterval(this.interval);
      this.interval = null;
    },
  },

  components: {},

  props: {
    project: Object,
  },
  created() {
    this.startTimer();
  },
};
</script>

<template>
  <!-- CARD DESKTOP -->
  <div
    v-if="project && project.images"
    class="position-relative"
    @mouseover="stopTimer"
    @mouseout="startTimer"
  >
    <div class="position-absolute start-10" @click="changeBack">
      <font-awesome-icon icon="fa-solid fa-circle-chevron-left" size="2xl" />
    </div>
    <div class="position-absolute start-87" @click="changeNext">
      <font-awesome-icon icon="fa-solid fa-circle-chevron-right" size="2xl" />
    </div>
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
  margin: auto;
}
img {
  transition: all 3s;
  height: 500px;
  max-width: 80%;
  object-fit: contain;
  overflow: hidden;
  width: 100%;
}
.start-10 {
  left: 5%;
  width: 20%;
  height: 100%;
  line-height: 500px;
  cursor: pointer;
}
.start-87 {
  right: 5%;
  width: 20%;
  height: 100%;
  line-height: 500px;
  cursor: pointer;
}

.slide-left {
  animation: slide-left 0.5s both;
}

.fa-circle-chevron-left,
.fa-circle-chevron-right {
  color: #ffffff8e;
  .start-87:hover &,
  .start-10:hover & {
    color: white;
    cursor: pointer;
  }
}
@keyframes slide-left {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
