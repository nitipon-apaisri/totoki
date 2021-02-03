<template>
  <div class="gallery">
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
    <div class="btns">
      <div class="btns-content">
        <button @click="previousPage" class="preBtn">Previous</button>
        <p>{{ PageNumber }}</p>
        <button @click="nextPage" class="nextBtn">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import Searching from "@/components/SearchComp";
export default {
  name: "Gallery",
  components: {
    Searching,
  },
  methods: {
    nextPage() {
      this.$root.nextPage();
    },
    previousPage() {
      this.$root.previousPage();
    },
  },
  computed: {
    Images() {
      return this.$root.searchResults;
    },
    PageNumber() {
      return this.$root.pageNumber;
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery {
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
  .btns {
    display: none;
    .btns-content {
      justify-content: center;
      display: flex;
      button {
        margin: 0;
      }
    }
  }
}
</style>