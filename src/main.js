import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//Import and use icon from front awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from "./store";
library.add(faSearch);
library.add(faHeart);
library.add(faTimes);
library.add(faTrashAlt);
library.add(faEllipsisH);
Vue.component("font-awesome-icon", FontAwesomeIcon);
//--------
Vue.config.productionTip = false;
new Vue({
   data() {
      return {
         imgPosition: 0,
         favImgPosition: 0,
         favData: [],
         useFavData: [],
      };
   },
   beforeMount() {
      //Get data from localStorage
      this.favData.push(JSON.parse(localStorage.getItem("fav")));
      for (let i of this.favData[0]) {
         this.useFavData.push(i);
      }
      //--------------------
   },
   methods: {
      async getInput(query) {
         this.$store.dispatch("getInput", query);
      },
      //---------------
      thisImg(index) {
         let favId = [];
         this.imgPosition = index;
         document.querySelector(".gallery > .light-box").style.display = "block";
         //Added color to favorite button if the image is already in favorite
         this.useFavData.forEach((r) => favId.push(r.id));
         let n = favId.includes(this.$store.state.searchResults[index].id);
         if (n === true) {
            document.querySelector(".favBtn").classList.add("alreadyFav");
         } else {
            document.querySelector(".favBtn").classList.remove("alreadyFav");
         }
         //-----------
      },
      thisFavImg(index) {
         this.favImgPosition = index;
         document.querySelector(".favorite > .light-box").style.display = "block";
      },
      nextPage() {
         this.$store.dispatch("nextPage");
      },
      previousPage() {
         this.$store.dispatch("previousPage");
      },
      //Set favorite images to local storage
      addFav(value) {
         this.useFavData.push(value);
         localStorage.setItem("fav", JSON.stringify(this.useFavData));
      },
      //---------------
      //Delete favorite images from local storage
      unFav(value) {
         this.useFavData.splice(value, 1);
         localStorage.setItem("fav", JSON.stringify(this.useFavData));
         document.querySelector(".favorite > .light-box").style.display = "none";
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
   store,
   render: (h) => h(App),
}).$mount("#app");
