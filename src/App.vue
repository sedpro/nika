<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from './components/NavComponent.vue'

</script>

<template>
  <header>
    <Nav></Nav>
  </header>

  <RouterView />
</template>
