<template>
    <div class="photo_wrapper" v-if="Object.keys(fav).length">
        <PhotoComponent :full="true" v-for="photo of fav" :key="photo.id" :photo="photo"></PhotoComponent>
    </div>
    <div v-else class="empty">
        <img src="@/assets/empty.png"/>
		<h3>Список избранного пуст</h3>
		<p>Добавляйте изображения, нажимая на звёздочки</p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import PhotoComponent from '@/components/PhotoComponent.vue';

const store = useStore()
const fav = computed(() => store.state.fav);

</script>

<style scoped>
.empty {
	background-color: white;
    text-align: center;
    min-height: 600px;
    padding-top: 200px;
}
h3 {
	font-weight: bold;
}
</style>