import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as DATA from "@/api/index";
import * as MOCK from "@/api/mock";
//Import and use icon from front awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSearch);
library.add(faHeart);
Vue.component("font-awesome-icon", FontAwesomeIcon);
//--------
Vue.config.productionTip = false;
new Vue({
   data() {
      return {
         searchResults: [],
         pageNumber: 1,
         searchInput: "",
         imgPosition: 0,
         favImgPosition: 0,
         favData: [],
         useFavData: [],
         totalPages: 0,
      };
   },
   beforeMount() {
      //Get data from localStorage
      this.favData.push(JSON.parse(localStorage.getItem("fav")));
      for (let i of this.favData[0]) {
         this.useFavData.push(i);
      }
      //--------------------
      //Get mock data from mock.josn for resolve the warning of ligthbox
      let data = MOCK.fetchImg();
      this.searchResults.push(data);
      //--------------------
   },
   methods: {
      //Function for fetching unsplsh api
      async getFetch() {
         let data = await DATA.searching(this.searchInput, this.pageNumber);
         this.searchResults = [];
         for (let i of data.results) {
            this.searchResults.push(i);
         }
      },
      //--------------------
      //Get data from unsplash api
      async getInput(query) {
         this.pageNumber = 1;
         this.searchInput = query;
         let data = await DATA.searching(query, this.pageNumber);
         this.totalPages = data.total_pages;
         for (let i = 0; i < this.searchResults.length; i++) {
            this.searchResults.shift(i);
         }
         for (let i of data.results) {
            this.searchResults.push(i);
         }
         document.querySelector(".gallery > .content").style.display = "block";
         document.querySelector(".gallery > .btns").style.display = "block";
      },
      //---------------
      thisImg(index) {
         this.imgPosition = index;
         document.querySelector(".gallery > .light-box").style.display = "block";
      },
      thisFavImg(index) {
         this.favImgPosition = index;
         document.querySelector(".favorite > .light-box").style.display = "block";
      },
      nextPage() {
         document.querySelector(".gallery > .light-box").style.display = "none";
         document.querySelector(".gallery > .btns > .btns-content > .preBtn").style.display = "block";
         this.pageNumber++;
         this.getFetch();
      },
      previousPage() {
         document.querySelector(".gallery > .light-box").style.display = "none";
         this.pageNumber--;
         if (this.pageNumber == 1) {
            document.querySelector(".gallery > .btns > .btns-content > .preBtn").style.display = "none";
         }
         this.getFetch();
      },
      //Set favorite images to local storage
      addFav(value) {
         this.useFavData.push(value);
         localStorage.setItem("fav", JSON.stringify(this.useFavData));
      },
      //----------------
      nextFavImg() {
         if (this.favImgPosition == this.useFavData.length - 1) {
            this.favImgPosition = 0;
         } else {
            this.favImgPosition++;
         }
      },
      previousFavImg() {
         if (this.favImgPosition == 0) {
            this.favImgPosition = 0;
         } else {
            this.favImgPosition--;
         }
      },
      nextImg() {
         if (this.imgPosition == 11) {
            this.nextPage();
         } else {
            this.imgPosition++;
         }
      },
      previousImg() {
         if (this.imgPosition == 0) {
            this.imgPosition = 0;
         } else {
            this.imgPosition--;
         }
      },
   },
   router,
   render: (h) => h(App),
}).$mount("#app");
