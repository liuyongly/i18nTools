// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify";
import icons from "@/assets/icons.js";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

const opts = {
  theme: {
    dark: false,
    default: "light",
    themes: {
      light: {
        primary: "#808275",
        secondary: "#FEFADD",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
    },
  },
  icons: {
    values: icons,
  },
};

export default new Vuetify(opts);
