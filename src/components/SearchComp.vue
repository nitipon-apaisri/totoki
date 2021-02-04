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
      this.$root.getInput(this.input);
      this.input = "";
      this.$router.push("/Gallery").catch((err) => {
        err;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin placeholder {
  font-size: 0.7rem;
}
.searching-box {
  margin-bottom: 32px;
  input {
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    padding: 8px;
  }
  button {
    @extend input;
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