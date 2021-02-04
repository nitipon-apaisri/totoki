<template>
<div class="container">
    <LightBox />
    <h1>TOTOKI</h1>
    <Searching />
</div>
</template>

<script>
// @ is an alias to /src
// import * as DATA from "@/api/index";
import Searching from "@/components/SearchComp"
import * as MOCK from "../api/mock.js"
import LightBox from "../components/LightBox.vue"
export default {
  name: "Home",
  components: {
    LightBox,
    Searching,
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
}

</script>


<style scoped>

  .container {
    max-width: 1440px;
    margin: auto;
  }

  .container h1 {
    margin: 50px 0;
  }

</style>