import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as DATA from "@/api/index";
Vue.config.productionTip = false;

new Vue({
   data() {
      return {
         searchResults: [],
      };
   },
   methods: {
      async getInput(query) {
         let data = await DATA.searching(query);
         for (let i of data.results) {
            this.searchResults.push(i);
         }
         console.log(JSON.parse(JSON.stringify(this.searchResults)));
      },
   },
   router,
   render: (h) => h(App),
}).$mount("#app");
