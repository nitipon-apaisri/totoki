<template>
  <div class="favorite">
    <h1>Favorite</h1>
    <div class="content">
      <ul>
        <li v-for="(img, index) in GetFav" :key="index">
          <div
            :style="{
              'background-image': 'url(' + img.urls.regular + ')',
            }"
            class="img"
            @click="thisImg(index)"
          ></div>
        </li>
      </ul>
    </div>
    <LightBox />
  </div>
</template>

<script>
import LightBox from "@/components/LightBoxFavComp";
export default {
  components: {
    LightBox,
  },
  computed: {
    GetFav() {
      return this.$root.useFavData;
    },
  },
  methods: {
    thisImg(index) {
      this.$root.thisFavImg(index);
    },
  },
};
</script>

<style lang="scss" scoped>
.favorite {
  max-width: 1440px;
  margin: auto;
  .content {
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
          cursor: pointer;
          box-sizing: border-box;
          width: 100%;
          height: 256px;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }
  }
}

.img:hover {
  opacity: 0.3;
}
</style>