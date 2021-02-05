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
      if (this.input.length == 0) {
        this.errorAlert = "Please fill any word";
        document.querySelector(".searching-box > p").style.display = "block";
      } else {
        document.querySelector(".searching-box > p").style.display = "none";
        this.$root.getInput(this.input);
        this.input = "";
        this.$router.push("/Gallery").catch((err) => {
          err;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin placeholder {
  font-size: 0.7rem;
}
.searching-box {
  width: fit-content;
  margin: auto;
  margin-bottom: 4px;
  input {
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    padding: 8px;
  }
  button {
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
</style>