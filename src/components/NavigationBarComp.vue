<template>
  <div class="navi">
    <nav>
      <ul>
        <font-awesome-icon
          :icon="['fas', 'ellipsis-h']"
          @click="toggleMenu = !toggleMenu"
          class="toggle"
        />
        <div class="menu" v-if="!toggleMenu">
          <li>
            <router-link to="/" @click="reset">Home</router-link>
          </li>
          <li>
            <router-link to="/Gallery" @click="reset">Gallery</router-link>
          </li>
          <li>
            <router-link to="/Favorite" @click="reset">Favorite</router-link>
          </li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleMenu: true,
    };
  },
  beforeMount() {
    if (window.innerWidth > 425) {
      this.toggleMenu = false;
    }
  },
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
      .toggle {
        width: 1.5rem;
        height: 1.5rem;
        color: #fff;
        display: none;
      }
      .menu {
        width: 100%;
        display: flex;
        justify-content: space-between;
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
}
@media screen and (max-width: 425px) {
  .navi {
    nav {
      ul {
        width: 90%;
        .toggle {
          display: block;
        }
        .menu {
          width: 50%;
          margin: auto;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
@media screen and (max-width: 320px) {
  .navi {
    nav {
      ul {
        .menu {
          width: 70%;
        }
      }
    }
  }
}
</style>