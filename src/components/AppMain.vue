<script>
import Carosello from "./Carosello.vue";
import { store } from "../data/store.js";

export default {
  data() {
    return {
      store,
      title: "MY PROJECT",
      img: "/sfondo.png",
      imgProfile: "/io.png",
    };
  },

  methods: {
    isMobile() {
      if (screen.width <= 720) {
        return true;
      }
    },
  },

  components: {
    Carosello,
  },
};
</script>

<template>
  <div class="container">
    <!-- HERO + PRESENTAZIONE -->

    <!-- DESKTOP -->
    <div class="row about-me-lg mt-5" v-if="!isMobile()">
      <!-- DESCRIZIONE -->
      <div class="col-lg-6">
        <section>
          <!-- TITOLO -->
          <div
            data-aos="flip-down"
            data-aos-easing="ease-out-quart"
            data-aos-delay="150"
            class="fs-1"
          >
            Junior Full Stack Web Developer
          </div>

          <!-- DESCRIZIONE SU DI ME -->
          <p
            data-aos="flip-down"
            data-aos-easing="ease-out-quart"
            data-aos-delay="250"
            class="my-5"
          >
            Benvenuto nel mio mondo digitale! Sono Francesco Pepi, un giovane
            sviluppatore web full stack specializzato nella creazione di Web App
            coinvolgenti.<br />Affronto ogni progetto con creatività e
            competenza tecnica.<br />
            Esplora il mio portfolio per scoprire le mie esperienze e
            competenze, e immergiti nel mondo delle Web App innovative e
            intuitive.
          </p>

          <!-- COLLEGAMENTI UTILI -->
          <ul
            data-aos="flip-down"
            data-aos-easing="ease-out-quart"
            data-aos-delay="350"
            class="p-0"
          >
            <li v-for="link in store.links" class="list-group-item">
              <a
                class="icon-link icon-link-hover link-underline-dark"
                style="--bs-icon-link-transform: translate3d(0, -0.165rem, 0)"
                :href="link.url"
              >
                <i class="bi" aria-hidden="true">
                  <font-awesome-icon :icon="link.icon" />
                  <use xlink:href="#box-seam"></use
                ></i>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </section>
      </div>
      <!-- IMMAGINE -->
      <div
        data-aos="flip-left"
        data-aos-duration="1300"
        data-aos-easing="ease-out-quart"
        class="col-lg-5 ms-auto"
      >
        <img class="img-fluid" :src="imgProfile" alt="" />
      </div>
      <div class="io" data-aos="fade-up" data-aos-easing="ease-in-sine">
        <span class="my-3 text-center mx-auto"></span>
      </div>
    </div>

    <!-- MOBILE -->
    <div v-if="isMobile()" class="row">
      <!-- DESCRIZIONE -->
      <div class="col-12">
        <section>
          <!-- TITOLO -->
          <div
            data-aos="flip-down"
            data-aos-easing="ease-out-quart"
            data-aos-delay="150"
            class="fs-2"
          >
            Junior Full Stack Web Developer
          </div>
          <!-- DESCRIZIONE SU DI ME -->
          <p
            data-aos="flip-down"
            data-aos-easing="ease-out-quart"
            data-aos-delay="250"
          >
            Benvenuto nel mio mondo digitale! Sono Francesco Pepi, un giovane
            sviluppatore web full stack specializzato nella creazione di Web App
            coinvolgenti.<br />Affronto ogni progetto con creatività e
            competenza tecnica.<br />
            Esplora il mio portfolio per scoprire le mie esperienze e
            competenze, e immergiti nel mondo delle Web App innovative e
            intuitive.
          </p>
          <!-- COLLEGAMENTI UTILI -->
          <ul
            data-aos="flip-down"
            data-aos-easing="ease-out-quart"
            data-aos-delay="350"
            class="p-0"
          >
            <li v-for="link in store.links" class="list-group-item">
              <a
                class="icon-link icon-link-hover link-underline-dark"
                style="--bs-icon-link-transform: translate3d(0, -0.165rem, 0)"
                href="#"
              >
                <i class="bi" aria-hidden="true">
                  <font-awesome-icon :icon="link.icon" />
                  <use xlink:href="#box-seam"></use
                ></i>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </section>
      </div>
      <!-- IMMAGINE -->
      <div
        data-aos="flip-left"
        data-aos-duration="1000"
        data-aos-easing="ease-out-quart"
        class="col-12"
      >
        <img class="img-fluid" :src="imgProfile" alt="" />
      </div>
    </div>

    <h1 data-aos="zoom-in" data-aos-delay="300" class="text-center">
      {{ title }}
    </h1>
    <!-- CARD MOBILE -->
    <section v-if="isMobile()">
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
    </section>

    <!-- CARD DESKTOP -->
    <section v-if="!isMobile()">
      <div class="row row-cols-3">
        <div
          v-for="project in this.store.projects"
          class="col g-3"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          :data-aos-delay="project * 150"
        >
          <!-- ! da completare -->
          <router-link :to="{ name: 'project', params: { id: project.id } }">
            <div class="card position-relative">
              <div class="card-header">
                <h4>
                  {{ project.label }}
                </h4>
              </div>
              <Carosello :project="project" />
              <div class="card-text position-absolute start-0 p-2">
                <p>
                  {{ project.type_id }}
                </p>
                <p>
                  {{ project.description }}
                </p>
              </div>
              <div class="card-footer"></div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
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
  height: 100%;
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
