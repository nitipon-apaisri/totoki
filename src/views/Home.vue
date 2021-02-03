<template>
  <div class="container">
    <h1>TOTOKI</h1>
    <Searching />
    <ul>
      <li v-for="(img, index) in Images" :key="index">
        <div
          :style="{
            'background-image': 'url(' + img.urls.regular + ')',
          }"
          class="img"
        ></div>
      </li>
    </ul>
  </div>
</template>

<script>
import Searching from "@/components/SearchComp";
export default {
  name: "Home",
  components: {
    Searching,
  },
  computed: {
    Images() {
      return this.$root.searchResults;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 1440px;
  margin: auto;
  ul {
    padding: 0;
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-flow: row;
    li {
      list-style: none;
      grid-column: span 3;
      .img {
        box-sizing: border-box;
        width: 100%;
        height: 256px;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>