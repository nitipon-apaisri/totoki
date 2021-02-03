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
</style>