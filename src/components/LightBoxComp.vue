<template>
  <div class="light-box" @click="hideLightBox">
    <div class="img-card">
      <div class="img-info">
        <img
          :src="Img[ImgPosition].urls.small"
          :alt="Img[ImgPosition].alt_description"
          class="img"
        />
        <div class="img-details">
          <div class="img-description">
            <h4>Description</h4>
            <p>{{ Img[ImgPosition].description }}</p>
          </div>
          <div class="author">
            <h4>Author</h4>
            <p>
              {{ Img[ImgPosition].user.first_name }}
              {{ Img[ImgPosition].user.last_name }}
            </p>
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
          <button>Fav</button>
        </div>
      </div>
    </div>
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
  methods: {
    hideLightBox() {
      document.querySelector(".light-box").style.display = "none";
    },
  },
};
</script>

<style lang="scss" scoped>
.light-box {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: none;
  .img-card {
    box-sizing: border-box;
    padding: 40px;
    border-radius: 24px;
    margin: auto;
    width: 860px;
    background: #fff;
    .img-info {
      display: flex;
      justify-content: space-between;
      .img {
        border-radius: 8px;
        box-sizing: border-box;
        width: 400px;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
      }
      @mixin img-info-details {
        line-height: 1.5rem;
        p {
          font-size: 0.9rem;
        }
      }
      .img-details {
        text-align: left;
        width: 320px;
        .img-description {
          @include img-info-details;
        }
        .author {
          @include img-info-details;
        }
        hr {
          border: 0;
          height: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          margin: 8px 0;
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