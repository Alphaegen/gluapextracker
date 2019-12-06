import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueToasted from "vue-toasted";

Vue.config.productionTip = false;

// Load Toast Plugin
Vue.use(VueToasted, {
  iconPack: "fontawesome"
});

window.addEventListener("load", async e => {
  if ("serviceWorker" in navigator) {
    try {
      navigator.serviceWorker.register("sw.js");
      console.log("ServiceWorker Registered");
    } catch (error) {
      console.log("ServiceWorker Not Registered");
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
