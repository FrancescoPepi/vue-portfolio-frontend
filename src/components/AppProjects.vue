<script>
import carouselBig from "./carouselBig.vue";
import { store } from "../data/store.js";

export default {
  data() {
    return {
      store,
      title: "MY PROJECT",
      img: "/sfondo.png",
      imgProfile: "/io.png",
      project: store.projects[0],
    };
  },

  methods: {
    selectProject(idProject) {
      this.project = idProject;
      // console.log(this.project);
    },
    // goBack() {
    //   router.go(-1);
    // },

    isMobile() {
      if (screen.width <= 720) {
        return true;
      }
    },
  },

  components: {
    carouselBig,
  },

  props: {
    projectProps: Object,
  },
  created() {
    if (this.$route.params.id) {
      // console.log(this.$route.params.id);
      this.project = this.store.projects[this.$route.params.id - 1];
    }
  },
};
</script>

<template>
  <div v-if="project" class="container">
    <!-- HERO + PRESENTAZIONE -->

    <div class="box py-2 mb-5">
      <h1 data-aos="zoom-in" data-aos-delay="300" class="text-center">
        {{ this.store.projects[project.id - 1].label }}
      </h1>
    </div>
    <!-- CARD MOBILE -->
    <!-- <section v-if="isMobile()">
      <div class="row row-cols-1">
        <div
          v-for="project in this.store.projects"
          class="col g-5"
          data-aos="zoom-in-up"
          data-aos-anchor-placement="center-bottom"
          :data-aos-delay="project * 50"
        >
          <div class="card">
            <div class="card-header">
              {{ project.label }}
            </div>
            <Carosello :project="project" />

            <div class="card-footer"></div>
          </div>
        </div>
      </div>
    </section> -->

    <!--  DESKTOP -->

    <section v-if="!isMobile()">
      <!-- SLIDER DESKTOP -->

      <div class="box p-4 mb-5 slider">
        <ul class="navbar-nav">
          <li
            v-for="(project, index) in this.store.projects"
            data-aos="zoom-in"
            data-aos-delay="300"
            class="nav-item"
          >
            <a
              @click="selectProject(project)"
              :class="
                this.project.id - 1 == index ? 'router-link-exact-active' : ''
              "
              class="nav-link fs-4"
            >
              {{ project.label }}
            </a>
          </li>
        </ul>
      </div>
      <!-- CARD DESKTOP -->
      <div class="box-img">
        <carouselBig
          :project="this.store.projects[this.project.id - 1]"
          class="carousel"
        />
      </div>
      <div>{{ project.description }}</div>
    </section>
  </div>
  <div v-else>{{ $router.go(-1) }}</div>
</template>

<style lang="scss" scoped>
.box {
  box-shadow: rgba(148, 148, 148, 0.116) 0px 30px 60px -12px,
    rgba(66, 66, 245, 0.156) 0px 18px 36px -18px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
.slider {
  min-width: 300px;
  position: fixed;
  top: 20%;
  left: 5%;
}
li a {
  color: rgb(145, 145, 145) !important;
  &:hover {
    color: rgb(239, 239, 239) !important;
    cursor: pointer;
  }
  &.router-link-exact-active {
    color: rgb(239, 239, 239) !important;
  }
}

.box-img {
  //   margin: auto;
  width: 100%;
  text-align: center;
  //   height: 600px;
  //   overflow: hidden;
  //   & .carousel {
  //     position: relative;
  //     top: -6%;
  //   }
}

.io {
  &::before {
    margin: 0 auto;
    content: url("/down-arrow-svgrepo-com.svg");
    display: block;
    width: 25px;
    animation: bounce2 2s ease infinite;
  }
  span {
    width: 30%;
    display: block;
    border: 2px solid rgba(93, 93, 93, 0.405);
    border-radius: 25px;
  }
}

@keyframes bounce2 {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.about-me-lg {
  height: calc(100vh - 110px);
  align-items: center;
}
.fs-1 {
  font-size: 4rem !important;
  line-height: 1.2;
}
a {
  color: rgb(239, 239, 239);
}
.fs-2 {
  font-size: 3rem !important;
}
.container {
  min-height: 100vh;
  margin-top: 150px;
}
.card {
  color: white;
  background-color: rgba(64, 63, 63, 0.429);
  & img {
    height: 250px;
    object-fit: cover;
  }
  .card-text {
    text-shadow: -2px 0 3px black, 0 2px 3px black, 2px 0 3px black,
      0 -2px 3px black;
    width: 100%;
    min-height: 100px;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 0, 0, 0),
      rgb(186, 182, 182, 1)
    );
    backdrop-filter: blur(1px);
    bottom: 5%;
  }
}
</style>
