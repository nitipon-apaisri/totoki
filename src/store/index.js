import Vue from "vue";
import Vuex from "vuex";
import * as DATA from "@/api/index";
Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      searchResults: [],
      pageNumber: 1,
      totalPages: 0,
      searchInput: "",
   },
   mutations: {
      async getInput(state, query) {
         state.pageNumber = 1;
         state.searchInput = query;
         let data = await DATA.searching(query, state.pageNumber);
         state.totalPages = data.total_pages;
         for (let i = 0; i < 12; i++) {
            state.searchResults.shift(i);
         }
         for (let i of data.results) {
            state.searchResults.push(i);
         }
      },
      async fetchApi(state) {
         let data = await DATA.searching(state.searchInput, state.pageNumber);
         for (let i = 0; i < 12; i++) {
            state.searchResults.shift(i);
         }
         for (let i of data.results) {
            state.searchResults.push(i);
         }
      },
   },
   actions: {
      getInput(context, query) {
         context.commit("getInput", query);
      },
      nextPage(context) {
         context.state.pageNumber++;
         context.commit("fetchApi");
      },
      previousPage(context) {
         context.state.pageNumber--;
         context.commit("fetchApi");
      },
   },
   modules: {},
});
