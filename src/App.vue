<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import AppUpViewport from "./components/AppUpViewport.vue";
import { store } from "./data/store.js";
import axios from "axios";

export default {
  data() {
    return {
      store,
      scTimer: 0,
      scY: 0,
    };
  },

  methods: {
    fetchApi(uri = this.store.api.baseUrl + "projects") {
      axios.get(uri).then((responce) => {
        console.log(responce.data.projects);
        this.store.projects = responce.data.projects.data;
        // console.log(responce.data.projects.data);
        let images = responce.data.images;
        for (let project of this.store.projects) {
          project.images = images.filter(
            (image) => image.project_id === project.id
          );
        }

        // console.log(this.store.projects);
      });
    },
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppUpViewport,
  },

  created() {
    this.fetchApi();
  },
};
</script>

<template>
  <AppHeader class="prova" data-aos="slide-down" />
  <router-view></router-view>
  <AppFooter />
  <AppUpViewport />
  <div class="blur"></div>
</template>

<style lang="scss">
.prova {
  background-image: linear-gradient(to top, rgb(0 0 0 / 0%), rgb(0 0 0));
  backdrop-filter: blur(2px);
}
</style>
