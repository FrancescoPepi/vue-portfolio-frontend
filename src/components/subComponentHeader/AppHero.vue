<script>
// import HeaderComponent from "./components/Header.vue";

export default {
  data() {
    return {};
  },

  // 	methods:{
  // 		myMethods(){
  // 			...
  // 		},
  // 	},

  // components: {
  //	MyComponent,
  // },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <div class="bg">
    <div class="container">
      <div class="row">
        <!-- <div class="box"> -->
        <h1>Drive with Avada</h1>
        <h3>We offer the finest driving tuition money can buy</h3>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  color: #f6f6f6;
  background-image: url("/img/homepage-hero-background.jpg");
  height: 750px;
  background-position: center;
  background-size: cover;
  .container {
    height: 100%;
    .row {
      height: 100%;
      align-content: center;
      h1 {
        font-size: 60px;
        font-weight: 900;
      }
    }
  }
}
</style>
