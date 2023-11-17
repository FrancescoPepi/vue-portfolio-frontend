<script>
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
      title: "titolo",
      img: "/img/footer-ad-grid.png",
    };
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
    <div class="container py-5">
      <div class="row">
        <div class="col">
          <img :src="store.logo" class="mb-3 w-75" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            temporibus, inventore eius modi itaque esse rem? Recusandae quos
            obcaecati dicta.
          </p>
        </div>
        <div v-for="(section, index) in store.footer" class="col">
          <div class="mb-2">
            <h4>{{ section.title.toLocaleUpperCase() }}</h4>
          </div>
          <ul v-for="subSection in section.links" class="p-0 d-flex">
            <li><font-awesome-icon :icon="subSection.icon" /></li>
            <li class="ps-4">{{ subSection.text.toLocaleUpperCase() }}</li>
          </ul>
        </div>
        <div class="col">
          <div>
            <img :src="img" class="w-100" alt="" />
            <div class="text-center mt-4">
              <button class="btn btn-green">BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-image: url("/img/footer-background-color.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;

  .col:nth-of-type(1),
  .col:nth-of-type(2) li {
    color: #929aa3;
    font-size: 0.8rem;
  }
  .col:nth-of-type(3) ul {
    color: #7abc64;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
}
</style>
