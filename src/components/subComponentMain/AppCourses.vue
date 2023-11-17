<script>
import { store } from "../../data/store.js";
import CircleProgress from "vue3-circle-progress";

export default {
  data() {
    return {
      store,
      title: "COURSES",
      img: "/img/new-corner.jpg",
    };
  },

  components: {
    CircleProgress,
  },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <div class="bg">
    <div class="container py-5">
      <div class="row">
        <!-- CARD COURSES -->
        <div class="col-4">
          <div class="card-form p-5">
            <div class="card-text">
              <h2 class="mb-4">Courses</h2>
              <h6 class="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                nemo iste distinctio beatae,
              </h6>
            </div>
            <div class="w-25 img-new">
              <img class="w-100" :src="img" alt="" />
            </div>
            <button class="btn btn-green">COURSE INFORMATION</button>
          </div>
        </div>
        <!-- CARD LEARN MORE -->
        <div class="col-8 d-flex">
          <div v-for="course in store.courses" class="col">
            <div class="text-center">
              <img class="w-75" :src="course.img" :alt="course.name" />
              <h3 class="my-3">{{ course.name }}</h3>
              <button class="btn btn-grey">
                {{ course.button.toUpperCase() }}
              </button>
            </div>
          </div>
        </div>
        <!-- CARD INFORMATION -->
        <div class="col-12">
          <div class="row">
            <div v-for="info in store.coursesInfo" class="col px-1">
              <div class="card-info p-5">
                <div class="progress-bar">
                  <circle-progress
                    v-if="parseInt(info.rate) != 0"
                    :is-gradient="true"
                    :percent="parseInt(info.rate)"
                    :border-width="7"
                    :border-bg-width="7"
                    :gradient="{
                      startColor: '#7abc64',
                      stopColor: '#7abc64',
                    }"
                  />
                  <circle-progress
                    v-else
                    :is-gradient="true"
                    :percent="parseInt(info.rate) + 0.5"
                    :border-width="7"
                    :border-bg-width="7"
                    :gradient="{
                      startColor: '#7abc64',
                      stopColor: '#7abc64',
                    }"
                  />
                  <div class="rate">{{ info.rate }}</div>
                </div>
                <div class="mt-5 fw-bold">{{ info.name.toUpperCase() }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  position: relative;

  // background-color: white;
  &::before {
    content: "";
    // image triangolare
    clip-path: polygon(0% 0%, 230% 0%, 50% 100%, -60% 50%);
    height: 600px;
    background-image: url("/img/promise-background.jpg");
    background-size: cover;
    background-position: bottom;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
  }
  .col-4 {
    .card-form {
      top: -25%;
      overflow: hidden;
      .img-new {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }

  .col-8 {
    h3 {
      color: #799aae;
    }
  }
  .col-12 {
    .progress-bar {
      position: relative;
      .vue3-circular-progressbar {
        margin: auto;
      }
      .rate {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: xxx-large;
      }
    }
  }
}
</style>
