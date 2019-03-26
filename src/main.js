import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import Home from "./components/Home.vue";
import Geoff from "./components/Geoff/Geoff.vue";
import Holly from "./components/Holly/Holly.vue";
import Jack from "./components/Jack/Jack.vue";
import Jeremy from "./components/Jeremy/Jeremy.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {path: "/", component: Home },
  {path: "/geoff", component: Geoff},
  {path: "/holly", component: Holly},
  {path: "/jack", component: Jack},
  {path: "/jeremy", component: Jeremy},
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  render: h => h(App)
}).$mount("#app");
