<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink :to="{name: 'Catalog'}">Каталог</RouterLink>
    <RouterLink class="favourites" :to="{name: 'Favourites'}">Избранное</RouterLink>
  </nav>
</template>

<style scoped>

header {
  width: 100%;
}

nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

nav a {
  text-decoration: none;
  width: 100%;
  background-color: #f2f7fb;
  color: black;
  padding: 10px;
  text-align: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
nav a.router-link-exact-active {
  background-color: white;
}

nav a.favourites::before {
  content: '☆ ';
}
nav a.favourites.router-link-exact-active::before {
  content: '★ ';
  color: #0f7cbf;
}

</style>
