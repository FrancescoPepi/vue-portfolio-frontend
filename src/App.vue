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
      api: {
        baseUrl: "http://127.0.0.1:8000/api/",
      },
    };
  },

  methods: {
    fetchApi(uri = this.api.baseUrl + "projects") {
      axios.get(uri).then((responce) => {
        // this.store.images = responce.data.images.data;
        this.store.projects = responce.data.projects.data;
        for (let project of this.store.projects) {
          project.images = [];

          for (let image of responce.data.images) {
            if (image.project_id == project.id) {
              project.images.push(image);
            }
          }
        }

        // console.log(responce.data.images);
        console.log(this.store.projects);
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
  <AppHeader data-aos="slide-down" />
  <AppMain />
  <AppFooter />
  <AppUpViewport />
  <div class="blur"></div>
</template>

<style lang="scss"></style>
