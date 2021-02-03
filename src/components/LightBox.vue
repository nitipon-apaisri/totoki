<template>

<div class="main-test"  v-on:click="openLightBox()">
    <div id="myModal" class="lightbox nodisplay">
        <img src="https://live.staticflickr.com/8515/8458051641_8563c83111.jpg" />
    </div>
</div>

</template>


<script>
export default {
    /*
    data(){
        return {

        }
    },
    */

methods: {
      openLightBox() {
        const open = document.getElementById("myModal")
        open.classList.remove("nodisplay")
        open.classList.add("display")
        }
    }
}

</script>


<style scoped>

#myModal {
    border: 3px solid black;
    width: 300px;
    height: 300px;
}

.lightbox {
    background-color: transparent;
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

</style>