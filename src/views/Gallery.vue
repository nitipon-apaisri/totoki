<template>
  <div class="gallery">
    <h1>TOTOKI</h1>
    <Searching />
    <div class="content">
      <ul>
        <li v-for="(img, index) in Images" :key="index">
          <div
            :style="{
              'background-image': 'url(' + img.urls.regular + ')',
            }"
            class="img"
            @click="thisImg(index)"
            :alt="img.alt_description"
          ></div>
        </li>
      </ul>
    </div>
    <div class="btns" v-if="displayBtns">
      <div class="btns-content">
        <button @click="previousPage" class="preBtn" v-if="previousBtn">
          Previous
        </button>
        <p>{{ PageNumber }}</p>
        <p>/</p>
        <p>{{ TotalPages }}</p>
        <button @click="nextPage" class="nextBtn" v-if="nextBtn">Next</button>
      </div>
    </div>
    <LightBox />
  </div>
</template>

<script>
import LightBox from "@/components/LightBoxComp";
import Searching from "@/components/SearchComp";
export default {
  name: "Gallery",
  components: {
    Searching,
    LightBox,
  },
  data() {
    return {
      displayBtns: false,
      previousBtn: false,
      nextBtn: true,
    };
  },
  updated() {
    if (this.Images.length >= 12) {
      this.displayBtns = true;
    }
  },
  mounted() {
    if (this.Images.length >= 12) {
      document.querySelector(".gallery > .content").style.display = "block";
      this.displayBtns = true;
    }
    if (this.PageNumber != 1) {
      this.previousBtn = true;
    }
  },
  methods: {
    nextPage() {
      this.previousBtn = true;
      if (this.PageNumber === this.$root.totalPages) {
        this.nextBtn = false;
      }
      this.$root.nextPage();
    },
    previousPage() {
      this.$root.previousPage();
    },
    thisImg(index) {
      this.$root.thisImg(index);
    },
  },
  computed: {
    Images() {
      return this.$store.state.searchResults;
    },
    PageNumber() {
      return this.$root.pageNumber;
    },
    TotalPages() {
      return this.$root.totalPages;
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  max-width: 1440px;
  padding: 0 32px;
  margin: auto;
  h1 {
    margin: 20px 0 20px 0;
  }
  .content {
    display: none;
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
  .btns {
    .btns-content {
      justify-content: center;
      display: flex;
      p {
        font-size: 0.9rem;
        font-weight: bold;
        margin: 0 2px;
        line-height: 35px;
      }
      button {
        border: 0;
        border-radius: 4px;
        padding: 8px 12px;
        font-size: 0.7rem;
        font-weight: bold;
        margin: 0 8px;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .gallery {
    .content {
      ul {
        li {
          .img {
            height: 234px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .gallery {
    .content {
      ul {
        grid-template-columns: repeat(6, 1fr);
        li {
          .img {
            height: 234px;
          }
        }
      }
    }
  }
}
</style>