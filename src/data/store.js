import { reactive } from "vue";

export const store = reactive({
  projects: [],
  images: [],
  api: {
    baseUrl: "http://127.0.0.1:8000/api/",
  },
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
