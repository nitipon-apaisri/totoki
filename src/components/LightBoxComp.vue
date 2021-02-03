<template>
  <div class="light-box">
    <div
      :style="{
        'background-image': 'url(' + Img[ImgPosition].urls.regular + ')',
      }"
      class="img"
    ></div>
  </div>
</template>

<script>
export default {
  computed: {
    Img() {
      return this.$root.searchResults;
    },
    ImgPosition() {
      return this.$root.imgPosition;
    },
  },
};
</script>

<style lang="scss" scoped>
.light-box {
  display: none;
  .img {
    box-sizing: border-box;
    width: 100%;
    height: 1024px;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>