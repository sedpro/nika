<template>
    <div :class="{expanded: user.expanded}" class="user item" @click="userClick(user)">
        <div class="circle" :class="{plus: !user.expanded, minus: user.expanded}" ></div>
        <span>{{ user.name }}</span>
    </div>
    <div v-for="album in user.albums">
        <AlbumComponent v-if="user.expanded" :album="album"></AlbumComponent>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import Catalog, { type User } from '../api/Catalog';
import AlbumComponent from './Album.vue';

const props = defineProps<{
    user: User,
}>()

const { user } = toRefs(props);

const userClick = async (user: User) => {
    user.expanded = !user.expanded;
    if (!user.albums) {
        user.albums = await Catalog.albums(user.id);
    }
}

</script>

<style scoped>
.user {
    padding-left: 40px;
}
.user span {
    font-weight: bold;
}
</style>