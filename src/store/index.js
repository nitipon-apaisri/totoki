import Vue from "vue";
import Vuex from "vuex";
import * as DATA from "@/api/index";
Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      searchResults: [],
      pageNumber: 1,
   },
   mutations: {
      async getInput(state, query) {
         state.pageNumber = 1;
         let data = await DATA.searching(query, state.pageNumber);
         for (let i of data.results) {
            state.searchResults.push(i);
         }
      },
   },
   actions: {
      getInput(context, query) {
         context.commit("getInput", query);
      },
   },
   modules: {},
});
