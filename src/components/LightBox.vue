<template>

<div class="main-test">
    <div id="myModal" class="lightbox" v-on:click="openLightBox()">
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
        open.classList.Add("display")
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

.main-test {
    border: 3px solid black;
    width: 300px;
    height: 300px;
}

</style>