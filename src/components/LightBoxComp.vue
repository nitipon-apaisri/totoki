<template>
  <div class="light-box">
    <div class="img-card">
      <div class="img-info">
        <a :href="Img[ImgPosition].links.html">
          <div
            :style="{
              'background-image': 'url(' + Img[ImgPosition].urls.regular + ')',
            }"
            class="img"
            @click="thisImg(index)"
            :alt="Img[ImgPosition].alt_description"
          ></div>
        </a>
        <div class="img-details">
          <div class="img-description">
            <div class="info">
              <h4>Description</h4>
              <p>{{ Img[ImgPosition].description }}</p>
            </div>
            <button class="close-modal" @click="hideLightBox">
              <font-awesome-icon :icon="['fas', 'times']" />
            </button>
          </div>
          <div class="author">
            <h4>Author</h4>
            <div class="author-info">
              <a :href="Img[ImgPosition].user.links.html">
                {{ Img[ImgPosition].user.first_name }}
                {{ Img[ImgPosition].user.last_name }}
              </a>
              <h6>On</h6>
              <a href="https://unsplash.com/">Unsplash</a>
            </div>
          </div>
          <hr />
          <div class="sub-details">
            <div class="diamension">
              <h4>Dimensions</h4>
              <p>
                {{ Img[ImgPosition].width }} x {{ Img[ImgPosition].height }}
              </p>
            </div>
            <div class="scale">
              <h4>Scale</h4>
              <p>1 : 1.5</p>
            </div>
            <div class="like">
              <h4>Like</h4>
              <p>{{ Img[ImgPosition].likes }}</p>
            </div>
          </div>
          <hr />
          <button @click="addFav(Img[ImgPosition])" class="favBtn">
            <font-awesome-icon :icon="['fas', 'heart']" />
          </button>
          <hr />
          <div class="next-pre">
            <button @click="previousImg">Previous</button>
            <button @click="nextImg">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      setFavData: [],
    };
  },
  computed: {
    Img() {
      return this.$store.state.searchResults;
    },
    ImgPosition() {
      return this.$root.imgPosition;
    },
    Loaded() {
      return this.$root.loaded;
    },
  },
  methods: {
    hideLightBox() {
      document.querySelector(".light-box").style.display = "none";
    },
    addFav(value) {
      document.querySelector(".favBtn").classList.add("alreadyFav");
      this.$root.addFav(value);
    },
    nextImg() {
      this.$root.nextImg();
    },
    previousImg() {
      this.$root.previousImg();
    },
  },
};
</script>
<style lang="scss" scoped>
.alreadyFav {
  color: #fc5185;
}
.light-box {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: none;
  button {
    border: 0;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 0.7rem;
    font-weight: bold;
  }
  .close-img {
    display: flex;
    justify-content: flex-end;
  }
  .img-card {
    box-sizing: border-box;
    padding: 40px;
    border-radius: 24px;
    margin: 170px auto 0 auto;
    width: 960px;
    background: #fff;
    .img-info {
      display: flex;
      justify-content: space-between;
      a {
        .img {
          border-radius: 8px;
          box-sizing: border-box;
          width: 500px;
          height: 350px;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
      @mixin img-info-details {
        line-height: 1.5rem;
        p {
          font-size: 0.9rem;
        }
        a {
          font-size: 0.9rem;
          color: #333;
        }
      }
      .img-details {
        width: 320px;
        text-align: left;
        .img-description {
          display: flex;
          justify-content: space-between;
          .info {
            @include img-info-details;
            p {
              max-height: 120px;
              overflow: scroll;
            }
          }
          .close-modal {
            height: fit-content;
          }
        }
        .author {
          @include img-info-details;
          .author-info {
            h6 {
              line-height: 25px;
              margin: 0 4px;
            }
            display: flex;
          }
        }
        hr {
          border: 0;
          height: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          margin: 8px 0;
        }
        .next-pre {
          display: flex;
          justify-content: space-between;
        }
        .sub-details {
          display: flex;
          justify-content: space-between;
          .diamension {
            @include img-info-details;
          }
          .scale {
            @include img-info-details;
          }
          .like {
            @include img-info-details;
          }
        }
      }
      .favBtn {
        padding: 10px 12px;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  // .light-box {
  //   .img-card {

  //   }
  // }
}
</style>