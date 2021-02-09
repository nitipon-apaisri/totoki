<template>
  <div class="searching-box">
    <input
      type="text"
      placeholder="Ex. Office, Flower, Landscape"
      name="searchInput"
      v-model="input"
      @keyup.enter="postInput"
    />
    <button @click="postInput">
      <font-awesome-icon :icon="['fas', 'search']" />
    </button>
    <p>{{ errorAlert }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      errorAlert: "",
    };
  },
  methods: {
    postInput() {
<<<<<<< HEAD

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
=======
      if (this.input.length == 0) {
        this.errorAlert = "It's empty!";
        document.querySelector(".searching-box > p").style.display = "block";
      } else {
        this.$root.getInput(this.input);
        this.input = "";
        this.$router.push("/Gallery").catch((err) => {
          err;
        });
        document.querySelector(".searching-box > p").style.display = "none";
      }
>>>>>>> main
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
<<<<<<< HEAD

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

=======
@mixin placeholder {
  font-size: 0.7rem;
}
.searching-box {
  width: fit-content;
  margin: auto;
  margin-bottom: 4px;
  input {
    border-radius: 4px 0 0 4px;
    border: 1px solid #e0e0e0;
    border-right: 0;
    padding: 8px 12px;
  }
  button {
    border-radius: 0 4px 4px 0;
    border-left: 0;
    @extend input;
  }
  p {
    letter-spacing: 0.0125rem;
    color: #ff643d;
    margin-top: 2px;
    text-align: left;
    font-size: 0.8rem;
    display: none;
  }
  ::-webkit-input-placeholder {
    @include placeholder;
  }
  ::-moz-placeholder {
    @include placeholder;
  }
  :-ms-input-placeholder {
    @include placeholder;
  }
  :-moz-placeholder {
    @include placeholder;
  }
}
>>>>>>> main
</style>