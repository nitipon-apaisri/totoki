<template>

<div class="main-test"  v-on:click="openLightBox()">
    <div id="myModal" class="lightbox nodisplay">
        <span class="close cursor" v-on:click="closeLightBox()">ALEX</span>
        <div class="lightbox-content">

                <!-- Next/previous controls -->
                    <a class="prev" v-on:click="prevSlide()">&#10094;</a>
                    <a class="next" v-on:click="nextSlide()">&#10095;</a>

            <img :src="images[this.position]" />
                           
            <!--
            <img src="https://live.staticflickr.com/8515/8458051641_8563c83111.jpg" />
            <img src="https://keepongeekin.files.wordpress.com/2020/08/cropped-1500x500-1.jpg" />
            -->
        </div>
    </div>
</div>

</template>


<script>
export default {
    
    data(){
        return {
             arr: "",
             position: 0,
        }
    },

    computed: {
        images(){
            return this.$root.imgArray
        }
    },
    

methods: {
      openLightBox() {
            const open = document.getElementById("myModal")
            open.style.display = "block"

            //console.log(images)

        //console.log(this.$root.imgArray)
        //const array = this.$root.imgArray

        },

        closeLightBox(){  
            const open = document.getElementById("myModal")
            open.style.display = "none"
            
        //alert("Bra!")

        },

        prevSlide(){
            this.position--
            console.log(this.position)
        },

        
        nextSlide(){
            this.position++
            console.log(this.position)
        },
        

       currentSlide(){

       }, 

    }
}

</script>


<style scoped>

#myModal {
    border: 3px solid black;
    width: 100%;
    height: auto;
}

/* The Lightbox (background) */
.lightbox {
    display: none;
    position: fixed;
    z-index: 1;
    margin-top: 100px;
    margin-left: 100px;
    margin-right: 100px;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: black;
}

/* Lightbox Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 90%;
  max-width: 1200px;
}

.display {
    display: block;
}


.nodisplay {
    display: none;
}


.main-test {
    border: 3px solid black;
    width: 300px;
    height: 300px;
}

/* The Close Button */
.close {
  color: white;
  /*position: absolute;*/
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
}



/* Hide the slides by default */
.mySlides {
  display: none;
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