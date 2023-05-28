<template>
    <div class="tooltip-container">
        <slot />
        <div class="tooltip">
            <span class="text">{{ text }}</span>
        </div>
    </div>
  </template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps<{
    text: string,
}>()
const { text } = toRefs(props);
</script>

<style scoped>
.tooltip-container { 
  position: relative;
}

.tooltip-container:hover .tooltip{
  opacity: 1;
}

.tooltip { 
  color: #ffffff;
  text-align: center;
  border-radius: 3px;

  width: 200px;
  top: 100%;
  left: 50%;
  margin-left: -100px;

  opacity: 0;
  transition: opacity 1s;

  position: absolute;
  z-index: 1;

  background: rgba(0, 0, 0, 0.7);
}
</style>