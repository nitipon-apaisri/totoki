<template>
  <div class="container">
    <h1>TOTOKI</h1>
    <Searching />
  </div>
</template>

<script>
import Searching from "@/components/SearchComp";
export default {
  name: "Home",
  components: {
    Searching,
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 1440px;
  margin: auto;
  h1 {
    margin: 50px 0;
  }
}
</style>