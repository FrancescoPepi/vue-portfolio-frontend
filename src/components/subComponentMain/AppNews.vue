<script>
import { store } from "../../data/store.js";

export default {
  data() {
    return {
      store,
      title: "COURSES",
      img: "/img/new-corner.jpg",
    };
  },

  // 	methods:{
  // 		myMethods(){
  // 			...
  // 		},
  // 	},

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
        <div class="col-12">
          <div class="card-info p-5">
            <div class="card-text">
              <h2 class="mb-4">Latest News</h2>
              <div class="d-flex">
                <div v-for="news in store.latestNews" class="col-6 p-4">
                  <div>
                    <img class="w-100" :src="news.img" alt="" />
                  </div>
                  <div class="card-text my-4">
                    <div>
                      <h3 class="fw-bold">{{ news.title }}</h3>
                    </div>
                    <div>
                      <span>{{ news.data }}</span>
                      <span> | </span>
                      <span>{{ news.comment }}</span>
                    </div>
                  </div>
                  <div>
                    <h6>
                      {{ news.text }}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <button class="btn btn-green">COURSE INFORMATION</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  height: 100%;
  background-image: url("/img/latestnews-background.jpg");
  background-size: cover;
  background-position: center;

  .col-12 {
    .card-info {
      top: -15%;
      border-bottom-left-radius: 0%;
      border-bottom-right-radius: 0%;
      box-shadow: inset 0px 7px 0px 0px #7799ad, 0px 12px 20px 0px #00000040;
      .card-text {
        font-size: 0.8rem;
        h3,
        span:nth-child(3) {
          color: #7abc64;
        }
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        bottom: -100px;
        width: 100%;
        height: 100px;
        background-image: url("/img/latestnews-bottom.png");
        background-position: bottom;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
