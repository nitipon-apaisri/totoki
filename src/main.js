import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

//Alex testar

new Vue({
   methods: {},
   router,
   render: (h) => h(App),
}).$mount("#app");
