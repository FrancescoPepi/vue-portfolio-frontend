<script>
// import AppPromoter from "./subComponentMain/AppPromoter.vue";
// import AppCall from "./subComponentMain/AppCall.vue";
// import AppCourses from "./subComponentMain/AppCourses.vue";
// import AppInstructors from "./subComponentMain/AppInstructors.vue";
// import AppTestimonials from "./subComponentMain/AppTestimonials.vue";
// import AppNews from "./subComponentMain/AppNews.vue";
// import AppNewsLetter from "./subComponentMain/AppNewsLetter.vue";

export default {
  data() {
    return {
      title: "MY PROJECT",
      img: "/sfondo.png",
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
  <div class="container mt-5">
    <!-- HERO + PRESENTAZIONE -->
    <div class="row">
      <div class="col-lg-7 col-12">
        <section v-if="!isMobile()">
          <div class="fs-1">Junior Full Stack Web Developer</div>
        </section>
        <section v-if="isMobile()">
          <div class="fs-2">Junior Full Stack Web Developer</div>
          <p>
            Benvenuto nel mio mondo digitale! Sono Francesco Pepi, un giovane
            sviluppatore web full stack specializzato nella creazione di Web App
            coinvolgenti.<br />Affronto ogni progetto con creatività e
            competenza tecnica.<br />
            Esplora il mio portfolio per scoprire le mie esperienze e
            competenze, e immergiti nel mondo delle Web App innovative e
            intuitive.
          </p>
        </section>
        <div class="card"></div>
      </div>
      <div class="col-lg-5 col-12">
        <div class="card"></div>
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
.fs-1 {
  font-size: 4rem !important;
}
.fs-2 {
  font-size: 3rem !important;
}
.container {
  height: 100%;
}
</style>
