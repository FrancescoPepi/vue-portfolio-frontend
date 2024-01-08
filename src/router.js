import { createRouter, createWebHistory } from "vue-router";
import AppMain from "./components/AppMain.vue";
import AppProjects from "./components/AppProjects.vue";
import AppFooter from "./components/AppFooter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppMain,
    },
    {
      path: "/projects",
      name: "projects",
      component: AppProjects,
    },
    {
      path: "/projects/:id",
      name: "project",
      component: AppProjects,
    },
  ],
  scrollBehavior(to, from, savePosition) {
    return (
      savePosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, left: 0, behavior: "smooth" }), 0);
      })
    );
  },
});

export { router };
