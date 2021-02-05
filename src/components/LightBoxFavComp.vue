<template>
  <div class="light-box">
    <div class="img-card">
      <div class="img-info">
        <a :href="Img[ImgPosition].links.html">
          <img
            :src="Img[ImgPosition].urls.small"
            :alt="Img[ImgPosition].alt_description"
            class="img"
          />
        </a>
        <div class="img-details">
          <div class="img-description">
            <div class="info">
              <h4>Description</h4>
              <p>{{ Img[ImgPosition].description }}</p>
            </div>
            <button class="close-modal" @click="hideLightBox">X</button>
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
      imgPos: 0,
    };
  },
  computed: {
    Img() {
      return this.$root.useFavData;
    },
    ImgPosition() {
      return this.$root.favImgPosition;
    },
  },
  methods: {
    hideLightBox() {
      document.querySelector(".light-box").style.display = "none";
    },
    nextImg() {
      this.$root.nextFavImg();
    },
    previousImg() {
      this.$root.previousFavImg();
    },
  },
};
</script>

<style lang="scss" scoped>
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
  .img-card {
    box-sizing: border-box;
    padding: 40px;
    border-radius: 24px;
    margin: 100px auto 0 auto;
    width: 860px;
    background: #fff;
    .img-info {
      display: flex;
      justify-content: space-between;
      a {
        .img {
          border-radius: 8px;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
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
    }
  }
}
</style>