import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

//Alex testar

new Vue({
   data(){
      return{
        //var: "Hello World",
        imgArray: [
         "https://live.staticflickr.com/8515/8458051641_8563c83111.jpg",
         "https://keepongeekin.files.wordpress.com/2020/08/cropped-1500x500-1.jpg",
        ],     
      }
    },
   methods: {},
   router,
   render: (h) => h(App),
}).$mount("#app");
