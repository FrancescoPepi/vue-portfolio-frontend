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
      title: "MY PROJECT",
      img: "/sfondo.png",
      imgProfile: "/io.png",
      // nBase: 50,
    };
  },

  methods: {
    // increments() {
    //   let nNew = this.nBase + 50;
    //   console.log(nNew);
    //   this.nBase = nNew;
    //   return nNew;
    // },
    isMobile() {
      if (screen.width <= 720) {
        return true;
      }
    },
  },

  components: {
    // AppPromoter,
    // AppCall,
    // AppCourses,
    // AppInstructors,
    // AppTestimonials,
    // AppNews,
    // AppNewsLetter,
  },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <div class="container">
    <!-- HERO + PRESENTAZIONE -->

    <!-- DESKTOP -->
    <div class="row about-me-lg" v-if="!isMobile()">
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
        data-aos-duration="1300"
        data-aos-easing="ease-out-quart"
        class="col-lg-5 ms-auto"
      >
        <img class="img-fluid" :src="imgProfile" alt="" />
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
          v-for="i in 6"
          class="col g-5"
          data-aos="zoom-in-up"
          data-aos-anchor-placement="center-bottom"
          :data-aos-delay="i * 50"
        >
          <div class="card">
            <div class="card-header">PROVA</div>
            <img :src="img" class="card-img-top" alt="..." />
            <div class="card-footer"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CARD DESKTOP -->
    <section v-if="!isMobile()">
      <div class="row row-cols-3">
        <div
          v-for="i in 6"
          class="col g-3"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          :data-aos-delay="i * 150"
        >
          <div class="card">
            <div class="card-header">PROVA</div>
            <img :src="img" class="card-img-top" alt="..." />
            <div class="card-footer"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
