<template>
    <div class="tooltip-container" @mouseenter="enter()" @mouseleave="leave()">
        <slot  />
        <div class="tooltip" v-if="hover">
            <span class="text">{{ text }}</span>
        </div>
    </div>
  </template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';

const props = defineProps<{
    text: string,
}>()
const { text } = toRefs(props);
const hover = ref(false);
const enter = () => hover.value = true;
const leave = () => hover.value = false;
</script>

<style scoped>
.tooltip-container { 
  position: relative;
}

.tooltip { 
  color: #ffffff;
  text-align: center;
  border-radius: 3px;
  padding: 0 2px;

  width: 200px;
  top: 100%;
  left: 50%;
  margin-left: -100px;

  position: absolute;
  z-index: 1;

  background: rgba(0, 0, 0, 0.7);
}
.tooltip::after {
  content: " ";
  position: absolute;
  bottom: 100%;
  left: 50%;
  border: 5px solid transparent;
  border-bottom: 5px solid rgba(0, 0, 0, 0.7);
}
</style>