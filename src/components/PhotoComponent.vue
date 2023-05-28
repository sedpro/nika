<template>
    <Tooltip :text="photo.title" v-if="!full">
        <Thumbnail :photo="photo"></Thumbnail>
    </Tooltip>
    <div class="thumbnail_container" v-else>
        <Thumbnail :photo="photo"></Thumbnail>
        <div class="title">{{ photo.title }}</div>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { type Photo } from '../api/Catalog';
import Tooltip from './TooltipComponent.vue';
import Thumbnail from './ThumbnailComponent.vue';

const props = defineProps<{
    photo: Photo,
    full: boolean,
}>()
const { photo, full } = toRefs(props);
</script>

<style scoped>
.thumbnail_container {
    position: relative;
    width: 150px;
}
</style>