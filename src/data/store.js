import { reactive } from "vue";

export const store = reactive({
  projects: [],
  images: [],
  links: [
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      url: "https://github.com/FrancescoPepi",
      id: "",
    },
    {
      name: "Linkedin",
      icon: "fa-brands fa-linkedin",
      url: "http://www.linkedin.com/in/francesco-pepi",
      id: "",
    },
    {
      name: "Instagram",
      icon: "fa-brands fa-instagram",
      url: "https://www.instagram.com/_francescopepi/",
      id: "",
    },
  ],
});
