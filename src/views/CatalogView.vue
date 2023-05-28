<template>
    <Suspense>
        <div v-for="user in users" :key="user.id" class="user_wrapper">
            <UserComponent :user="user"></UserComponent>
        </div>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Catalog, { type User} from '@/api/Catalog';
import UserComponent from '../components/UserComponent.vue'

const users = ref<User[]>([]);

const loadUsers = async () => {
    users.value = await Catalog.users();
}
loadUsers();

</script>

<style scoped>
.user_wrapper {
    border-bottom: solid 1px #fbfbfb;
    user-select: none;
}
.user_wrapper:last-child {
    border-bottom: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}
</style>