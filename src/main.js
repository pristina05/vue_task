import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//bootstrap-vue
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

// validation
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

// v-mask
import VueMask from "v-mask";
Vue.use(VueMask);

// vue-toaster

import Toaster from "v-toaster";

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import "v-toaster/dist/v-toaster.css";

// optional set default imeout, the default is 10000 (10 seconds).
Vue.use(Toaster, { timeout: 5000 });

// Date picker
import Datepicker from "vuejs-datepicker";
Vue.use(Datepicker);

// vue-swiper
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper);
import Swiper from "swiper";
Swiper.use({
  name: "pluginName",
  params: {
    pluginSwitch: false
  },
  on: {
    init() {
      if (!this.params.pluginSwitch) return;
      // eslint-disable-next-line no-console
      console.log("init");
    }
    // swiper callback...
  }
});
// font-awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faTwitter,
  faFacebookF,
  faInstagram,
  faSkype
} from "@fortawesome/free-brands-svg-icons"; //fab
import {
  faThumbsUp,
  faUser,
  faGlobe,
  faCheckSquare,
  faChevronCircleRight,
  faChevronRight,
  faMapMarker,
  faEnvelope,
  faPhone,
  faEyeDropper
} from "@fortawesome/free-solid-svg-icons"; //fa
import { faFile } from "@fortawesome/free-regular-svg-icons"; //far
import { faTv } from "@fortawesome/free-solid-svg-icons"; //fas

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faTv,
  faCheckSquare,
  faThumbsUp,
  faFile,
  faUser,
  faGlobe,
  faChevronCircleRight,
  faChevronRight,
  faMapMarker,
  faEnvelope,
  faPhone,
  faEyeDropper,
  faSkype
);
library.add(fab);
library.add(faTwitter, faFacebookF, faInstagram);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,

  store,
  render: h => h(App)
}).$mount("#app");
