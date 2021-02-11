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
      getInput(state, query) {
         state.pageNumber = 1;
         state.searchInput = query;
      },
   },
   actions: {
      async getInput(context, query) {
         context.commit("getInput", query);
         let data = await DATA.searching(query, context.state.pageNumber);
         context.state.totalPages = data.total_pages;
         for (let i = 0; i < 12; i++) {
            context.state.searchResults.shift(i);
         }
         for (let i of data.results) {
            context.state.searchResults.push(i);
         }
      },
      async nextPage(context) {
         context.state.pageNumber++;
         let data = await DATA.searching(context.state.searchInput, context.state.pageNumber);
         for (let i = 0; i < 12; i++) {
            context.state.searchResults.shift(i);
         }
         for (let i of data.results) {
            context.state.searchResults.push(i);
         }
      },
      async previousPage(context) {
         context.state.pageNumber--;
         let data = await DATA.searching(context.state.searchInput, context.state.pageNumber);
         for (let i = 0; i < 12; i++) {
            context.state.searchResults.shift(i);
         }
         for (let i of data.results) {
            context.state.searchResults.push(i);
         }
      },
   },
   modules: {},
});
