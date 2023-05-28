<template>
    <teleport to="#modals" v-if="show">
        <div class="modal-shadow" @click.self="closeModal">
            <div class="modal-close" @click="closeModal">&#10006;</div>
            <img :src="url" />
        </div>
    </teleport>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';

const props = defineProps<{
    url: string,
}>()

const { url } = toRefs(props);
let show = ref(false);

const closeModal = () => {
    show.value = false;
}

const openModal = () => {
    show.value = true;
}

defineExpose({
    openModal,
})

</script>

<style scoped>
.modal-shadow {
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.39);
}
img {
    width: 600px;
    width: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.modal-close {
    color: #fff;
    position: fixed;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
}

</style>