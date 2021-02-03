<template>
<<<<<<< HEAD
  <div>
      <p>SEARCH</p>
      <div class="main">
      <input>
      <button v-on:click="showGalleri">DONE</button>
      <Galleri v-if="show"></Galleri>
      </div>
=======
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
    <div class="btns">
      <button @click="previousPage" class="preBtn">Previous</button>
      <button @click="nextPage" class="nextBtn">Next</button>
    </div>
>>>>>>> main
  </div>
</template>

<script>
<<<<<<< HEAD
// @ is an alias to /src

import Galleri from "../views/Galleri.vue"


export default {
  
  components: {
    Galleri: Galleri
=======
import Searching from "@/components/SearchComp";
export default {
  name: "Home",
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
>>>>>>> main
  },
  data() { return {
    show: true
  }},
  
  methods: {
    showGalleri() {
      this.show = !this.show
    }
  }

}
    
</script>
<<<<<<< HEAD

<style scoped>

.main {
  display:flex;
  flex-direction:column;
  align-items:center;
}

input {
  width:200px;
}
</style>
=======
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
  .btns {
    display: none;
  }
}
</style>
>>>>>>> main
