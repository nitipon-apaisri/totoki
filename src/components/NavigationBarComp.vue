<template>
  <div class="navi">
    <nav>
      <ul>
        <li>
          <router-link to="/" @click="reset">Home</router-link>
        </li>
        <li>
          <router-link to="/Gallery" @click="reset">Gallery</router-link>
        </li>
        <li>
          <router-link to="/Favorite" @click="reset">Favorite</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    reset() {
      this.$root.loaded = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.navi {
  nav {
    background: #333;
    ul {
      width: 240px;
      justify-content: space-between;
      display: flex;
      padding: 16px;
      li {
        list-style: none;
        a {
          text-decoration: none;
          color: #fff;
          font-weight: bold;
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>