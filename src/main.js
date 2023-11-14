import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/fonts/style.scss";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { fromLonLat } from "ol/proj";

const vuetify = createVuetify({
  components,
  directives,
});

export default {
  imageLoad(img) {
    return require("@/img/" + img);
  },

  newView(center) {
    var map = this.$store.state.map;
    map.getView().setCenter(fromLonLat([center.long, center.lat]));
    map.getView().setZoom(center.zoom);

    this.$store.dispatch("mapUpdate", map);
  },
};

createApp(App).use(store).use(router).use(vuetify).mount("#app");
