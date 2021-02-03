<template>
<div class="imgcomponent">
    <img v-bind:src="image.url">    
</div>
</template>


<script>

import * as MOCK from "../api/mock.js";

export default {

    data() { return {
        photos: []
    }},

    
    created() {
        
        this.photos = MOCK.fetchImg();
        
    }

}
</script>

<style scoped>

.imgcomponent { 
    margin-top:1rem;
    position:relative;

 }
.imgcomponent img{
    margin-left:0.4rem;
    
}

</style>