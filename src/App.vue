<template>
  <div id="app">
    <NavigationBar />
    <router-view />
  </div>
</template>
<script>
import NavigationBar from "@/components/NavigationBarComp";
export default {
  components: {
    NavigationBar,
  },
};
</script>
<style lang="scss">
h1,
h2,
h3,
h4,
h5,
h6,
p,
hr {
  margin: 0;
}
body {
  margin: 0 !important;
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
}
</style>
