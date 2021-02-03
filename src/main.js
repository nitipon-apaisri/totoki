import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as DATA from "@/api/index";
Vue.config.productionTip = false;

new Vue({
   data() {
      return {
         searchResults: [],
         pageNumber: 1,
         searchInput: "",
      };
   },
   methods: {
      async getFetch() {
         let data = await DATA.searching(this.searchInput, this.pageNumber);
         this.searchResults = [];
         for (let i of data.results) {
            this.searchResults.push(i);
         }
      },
      async getInput(query) {
         this.searchInput = query;
         let data = await DATA.searching(query, this.pageNumber);
         for (let i of data.results) {
            this.searchResults.push(i);
         }
         console.log(JSON.parse(JSON.stringify(this.searchResults)));
      },
      nextPage() {
         this.pageNumber++;
         this.getFetch();
         console.log(JSON.parse(JSON.stringify(this.searchResults)));
      },
      async previousPage() {
         this.pageNumber--;
         this.getFetch();
         console.log(JSON.parse(JSON.stringify(this.searchResults)));
      },
   },
   router,
   render: (h) => h(App),
}).$mount("#app");
