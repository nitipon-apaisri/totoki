<template>
  <div>
      <p>SEARCH</p>
      <div class="main">
      <input>
      <button v-on:click="showGalleri">DONE</button>
      <Galleri v-if="show"></Galleri>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Galleri from "../views/Galleri.vue"


export default {
  
  components: {
    Galleri: Galleri
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
