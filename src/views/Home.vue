<template>
  <div class="home">
    <h1>Hello</h1>
      <img :src="link" alt="img" />
    <LightBox />
  </div>
</template>

<script>
// @ is an alias to /src
// import * as DATA from "@/api/index";
import * as MOCK from "../api/mock.js";
import LightBox from "../components/LightBox.vue"
export default {
  name: "Home",
  components: {
    LightBox,
  },

  data() {
    return {
      link: "",
    };
  },

  created() {
    let data = MOCK.fetchImg();
    this.link = data;
  },
};
</script>
