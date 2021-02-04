<template>
  <div class="light-box">
    <button class="close-modal" @click="hideLightBox">X</button>

    <!-- Next/previous controls -->
                    <a class="prev" v-on:click="PreviousSlide">&#10094;</a>
                    <a class="next" v-on:click="NextSlide">&#10095;</a>

    
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
    

    <!--
    <div class="img-card">
      <div class="img-info">
        <img
          :src="Img[ImgPosition[this.position]].urls.small"
          :alt="Img[ImgPosition[this.position]].alt_description"
          class="img"
        />
        <div class="img-details">
          <div class="img-description">
            <h4>Description</h4>
            <p>{{ Img[ImgPosition[this.position]].description }}</p>
          </div>
          <div class="author">
            <h4>Author</h4>
            <p>
              {{ Img[ImgPosition[this.position]].user.first_name }}
              {{ Img[ImgPosition[this.position]].user.last_name }}
            </p>
          </div>
          <hr />
          <div class="sub-details">
            <div class="diamension">
              <h4>Dimensions</h4>
              <p>
                {{ Img[ImgPosition[this.position]].width }} x {{ Img[ImgPosition[this.position]].height }}
              </p>
            </div>
            <div class="scale">
              <h4>Scale</h4>
              <p>1 : 1.5</p>
            </div>
            <div class="like">
              <h4>Like</h4>
              <p>{{ Img[ImgPosition[this.position]].likes }}</p>
            </div>
          </div>
          <hr />
          <button>Fav</button>
        </div>
      </div>
    </div>
    -->

  </div>
</template>

<script>
export default {

  data(){
      return {
        position: 0
      }
  },

  computed: {
    Img() {
      return this.$root.searchResults;
    },
    ImgPosition() {
      return this.$root.imgPosition;
    },
    PreviousSlide(){
      return this.$root.prevSlide;
    },
    NextSlide(){
      return this.$root.nextSlide;
    },
    
  },

  methods: {
    hideLightBox() {
      document.querySelector(".light-box").style.display = "none";
    },

    /*
    PreviousSlide(){
      return this.$root.prevSlide;
    },
    NextSlide(){
      return this.$root.nextSlide;
    },
    */

  /*
    prevSlide(){
            this.position--
            console.log(this.position)
        },

        
        nextSlide(){
            this.position++
            console.log(this.position)
        },

  */

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
  .close-modal {
    margin-top: 50px;
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
        width: 320px;
        text-align: left;
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

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  /*position: absolute;*/
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

</style>