import { reactive } from "vue";

export const store = reactive({
  projects: [],
  images: [],
  links: [
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      url: "",
      id: "",
    },
    {
      name: "Linkedin",
      icon: "fa-brands fa-linkedin",
      url: "",
      id: "",
    },
    {
      name: "Instagram",
      icon: "fa-brands fa-instagram",
      url: "",
      id: "",
    },
  ],
});
