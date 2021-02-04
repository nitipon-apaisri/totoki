<template>
  <div class="navi">
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/Gallery">Gallery</router-link>
        </li>
        <li>
          <router-link to="/Favorite">Favorite</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
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