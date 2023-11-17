<script>
// import HeaderComponent from "./components/Header.vue";

export default {
  data() {
    return {
      title: "promoter",
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
        <div class="col-6 my-5">
          <h1 class="title mb-5">Get Behind The Whell</h1>
          <h3 class="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            laborum, dolor officia repudiandae sint quae?
          </h3>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            necessitatibus illum quis doloribus ipsam doloremque maxime vitae
            officiis? Quod autem ullam accusantium quas! Sapiente ad enim
            eveniet, ipsum libero minus.
          </h6>
        </div>
        <div class="col-6 my-5">
          <div class="card-form p-5">
            <div class="card-text">
              <h2 class="mb-4">First Lesson Free!</h2>
              <h6 class="mb-4">
                When you make a block booking with us your first lesson is
                inclided free.
              </h6>
            </div>
            <!-- FORM -->
            <!-- NOME -->
            <div class="form-floating mb-4">
              <input
                type="name"
                class="form-control"
                id="floatingName"
                placeholder="name"
              />
              <label for="floatingName">Your Name*</label>
            </div>
            <!-- EMAIL -->
            <div class="form-floating mb-4">
              <input
                type="email"
                class="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
              />
              <label for="floatingEmail">Email*</label>
            </div>
            <!-- TELEFONO -->
            <div class="form-floating mb-4">
              <input
                type="text"
                class="form-control"
                id="floatingTelefono"
                placeholder="Number"
              />
              <label for="floatingTelefono">Telefono</label>
            </div>
            <!-- LOCATION -->
            <div class="form-floating mb-4">
              <input
                type="location"
                class="form-control"
                id="floatingLoacation"
                placeholder="name@example.com"
              />
              <label for="floatingLoacation">Location</label>
            </div>
            <!-- BUTTON -->
            <button class="btn btn-green">REQUEST A CALLBACK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: white;
  color: #494c4e;
  .col-6 {
    position: relative;
    min-height: 400px;
  }
  h2 {
    color: #7abc64;
  }
  .card-form {
    position: absolute;
    top: -40%;
    .form-control {
      background-color: #f7f7f7;
    }
    label {
      color: #929aa3;
    }
  }
}
</style>
