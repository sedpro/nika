<template>
    <div class="album item" @click="albumClick(album)">
        <div class="circle" :class="{plus: !album.expanded, minus: album.expanded}" ></div>
        <span>{{ album.title }}</span>
    </div>
    <div class="photo_wrapper" v-if="album.expanded">
        <PhotoComponent :full="false" v-for="photo in album.photos" :photo="photo" :key="photo.id"></PhotoComponent>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import Catalog, { type Album } from '../api/Catalog';
import PhotoComponent from './PhotoComponent.vue';

const props = defineProps<{
    album: Album,
}>()

const { album } = toRefs(props);

const albumClick = async (album: Album) => {
    album.expanded = !album.expanded;
    if (!album.photos) {
        album.photos = await Catalog.photos(album.id);
    }
}
</script>

<style scoped>
.album {
    padding-left: 60px;
}
</style>