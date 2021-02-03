<template>
    <div class="galleri">
        <div class="imgcomponent">
        <Bildkomponent/>
        </div>
    </div>
</template>

<script>

import Bildkomponent from "../views/Bildkomponent"
export default {

   
components: {
    Bildkomponent: Bildkomponent
}

 

}
</script>

<style scoped>


.galleri {
    width:920px;
    height:700px;
    border-top: solid 1px black;
    border-bottom: solid 1px black;
    margin-top:2rem;
    display:flex;
}






</style>