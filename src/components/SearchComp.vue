<template>
  <div class="searching-box">
    <input
      type="text"
      placeholder="Ex. Office, Flower, Landscape"
      name="searchInput"
      v-model="input"
      @keyup.enter="postInput"
    />
    <button @click="postInput">Send</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    postInput() {

      //Not working
      /*
      if(this.$root.getInput(this.input).length == 0){
        this.input = "";
        break;
      }
      */

      this.$root.getInput(this.input);

      
      
      this.input = "";
      this.$router.push("/Gallery").catch((err) => {
        err;
      });
    },

    btnStuff() {

      /*
      if(this.$root.getInput(this.input).length == 0)
      {
        document.getElementsByTagName("button")[0].classList.add("cursor")
      }
      */

     console.log("beforeCreate med btn!")
    }
  },

    beforeCreate(){
      console.log("beforeCreate!")
      //this.btnStuff()
    }
};
</script>

<style lang="scss" scoped>

/*
button:hover {
  background-color: black;
  display: none;
}
*/

.cursor:hover {
  cursor: crosshair;
  background-color: red;
}

</style>