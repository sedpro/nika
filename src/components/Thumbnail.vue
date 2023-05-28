<template>
    <img :src="photo.thumbnailUrl" @click.self="photoClick()"/>
    <div class="star" :class="{gold: isFavourite, grey: !isFavourite}" @click="starClick()"></div>
    <Modal ref="modal" :url="photo.url"></Modal>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
import { type Photo } from '../api/Catalog';
import Modal from './Modal.vue';
import { useStore } from 'vuex';

const props = defineProps<{
    photo: Photo,
}>()

const { photo } = toRefs(props);

const store = useStore();
const isFavourite = computed(() => store.getters.isFavourite(photo.value.id));

const modal = ref<typeof Modal>();
const photoClick = async () => {
    modal.value?.openModal();
}
const starClick = async () => {
    store.dispatch('toggle', photo.value);
}

</script>

<style scoped>
img {
    border-radius: 4px;
    width: 150px;
    height: 150px;
    cursor: pointer;
}
.star::before {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: white;
    cursor: pointer;
    border-radius: 50%;
    font-size: 20px;
    line-height: 18px;
    width: 20px;
    height: 20px;
    display: flex;
    text-align: center;
    justify-content: center;
    content: '★';
}
.grey::before {
  color: #d0d0d0;
}
.gold::before {
  color: #feae3a;
}
</style>