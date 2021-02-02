<template>
  <div class="home">
    <img :src="link" alt="test-img" />
  </div>
</template>

<script>
// @ is an alias to /src
import * as MOCK from "../api/mock";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      link: "",
    };
  },
  async created() {
    let data = await MOCK.fetchImg();
    this.link = data;
  },
};
</script>
