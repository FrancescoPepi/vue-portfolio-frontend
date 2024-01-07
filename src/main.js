import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

// ADD BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

// ADD CIRCLE
import "vue3-circle-progress/dist/circle-progress.css";

// ADD SCSS
import "./style/general.scss";
import "./style/subStyle/variable.scss";

// FONTAWSOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import // faCircle as faCircleS,
// faPhone,
"@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import // faCircle as faCircleR,
// faCopyright,
"@fortawesome/free-regular-svg-icons";

library.add(faGithub, faLinkedin, faInstagram);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
// app.AOS.init();
