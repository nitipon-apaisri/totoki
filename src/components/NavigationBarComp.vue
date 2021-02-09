<template>
  <div class="navi">
    <nav>
      <ul>
<<<<<<< HEAD
        <router-link to="/">Home</router-link> |
        <router-link to="/Gallery">Gallery</router-link> |
        <router-link to="/Favorite">Favorite</router-link>
=======
        <li>
          <router-link to="/" @click="reset">Home</router-link>
        </li>
        <li>
          <router-link to="/Gallery" @click="reset">Gallery</router-link>
        </li>
        <li>
          <router-link to="/Favorite" @click="reset">Favorite</router-link>
        </li>
>>>>>>> main
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

<<<<<<< HEAD
<style scoped>

a:link {
  color: black;
}

a:visited {
  color: black;
}

a:hover {
  color: red;
}

a:active {
  color: yellow;
}

=======
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
>>>>>>> main
</style>