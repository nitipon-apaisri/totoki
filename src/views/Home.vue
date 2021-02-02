<template>
  <div class="home">
    <img :src="link">
  </div>
</template>

<script>
// @ is an alias to /src
import * as MOCK from "../api/mock.js";
export default {
  name: "Home",
  components: {},
  data() { return {
    link:  ""
  }},
 
    created() {
    let data =  MOCK.fetchImg();
    this.link = data;
  }}
</script>
