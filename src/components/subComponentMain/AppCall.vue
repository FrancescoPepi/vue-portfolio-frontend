<script>
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
      title: "CALL",
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
  <div class="bg py-5">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <h1 class="title">Start Learning to Drive Today</h1>
          <h3 class="font-weight-bold">
            Give us a call to schedule your first driving lesson
          </h3>
        </div>
        <div class="col-4">
          <h3 class="font-weight-bold">
            <font-awesome-icon icon="fa-solid fa-phone" flip="horizontal" />
            {{ store.phoneNumber }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-image: url("/img/horizontal-cta-background.jpg");
  background-position: center;
  background-size: cover;
  color: #f6f6f6;
  .title {
    color: #f6f6f6;
  }
  .row {
    align-items: center;
  }
}
</style>
