<script>
export default {
  data() {
    return {
      title: "Sign up to our Newsletter",
      subTitle:
        "(We do not share your data with anybody, and only use it dor its intended purpose)",
      button: "SUBSCRIBE",
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
        <div class="col-7 mx-auto">
          <div class="text-center">
            <div class="title">
              {{ title }}
            </div>
            <div class="my-5">
              <div class="mb-4">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
              <button class="btn btn-green">{{ button }}</button>
            </div>

            <h6>
              {{ subTitle }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-image: url("/img/newsletter_background.jpg");
  background-size: cover;
  background-position: center;
  height: 100%;
  color: #929aa3;
  .title {
    font-size: 30px;
  }

  h6 {
    font-size: 0.8rem;
  }
  .form-control {
    height: 50px;
  }
  .btn {
    width: 100%;
  }
}
</style>
