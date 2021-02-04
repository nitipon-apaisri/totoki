<template>
  <div class="navi">
    <nav>
      <ul>
        <router-link to="/">Home</router-link> |
        <router-link to="/Gallery">Gallery</router-link> |
        <router-link to="/Favorite">Favorite</router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

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

</style>