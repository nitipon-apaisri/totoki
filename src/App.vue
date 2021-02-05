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
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  opacity: 0.5;
  background-color: #dde0e6;
  border: 2px solid transparent;
  border-radius: 9px;
  background-clip: content-box;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
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
  padding: 0 0 20px 0;
  margin: -16px 0 0 0 !important;
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  button {
    cursor: pointer;
  }
}
</style>
