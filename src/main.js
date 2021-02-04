import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as DATA from "@/api/index";
Vue.config.productionTip = false;

//Alex testar

new Vue({
   data(){
      return{
         searchResults: [],
         pageNumber: 1,
         searchInput: "",
         imgPosition: 0,
        //var: "Hello World",
        imgArray: [
         "https://live.staticflickr.com/8515/8458051641_8563c83111.jpg",
         "https://keepongeekin.files.wordpress.com/2020/08/cropped-1500x500-1.jpg",
        ],     
      }
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
         this.searchResults = [];
         this.pageNumber = 1;
         this.searchInput = query;
         let data = await DATA.searching(query, this.pageNumber);
         for (let i of data.results) {
            this.searchResults.push(i);
         }
         document.querySelector(".gallery > .content").style.display = "block";
         document.querySelector(".gallery > .btns").style.display = "block";
      },
      thisImg(index) {
         this.imgPosition = index;
         document.querySelector(".gallery > .light-box").style.display = "block";
      },
      nextPage() {
         document.querySelector(".gallery > .light-box").style.display = "none";
         this.pageNumber++;
         this.getFetch();
      },
      previousPage() {
         document.querySelector(".gallery > .light-box").style.display = "none";
         this.pageNumber--;
         this.getFetch();
      },
      prevSlide(index) {
         //return this.thisImg(index--)
         //this.imgPosition = index;
         this.thisImg(index--) // works         
         console.log(this.thisImg);
     },   
     nextSlide(index) {
         //this.thisImg(index++)
         //this.imgPosition = index;
         //this.imgPosition++;
         console.log(this.thisImg(index++)); //undefined
         //return this.thisImg(index++)
     },
   },
   router,
   render: (h) => h(App),
}).$mount("#app");
