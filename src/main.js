import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as DATA from "@/api/index";
Vue.config.productionTip = false;

new Vue({
   data() {
      return {
         input: "",
      };
   },
   methods: {
      async getInput(query) {
         let data = await DATA.searching(query);
         console.log(data.results);
      },
   },
   router,
   render: (h) => h(App),
}).$mount("#app");
