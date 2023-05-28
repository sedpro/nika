import { createRouter, createWebHistory } from 'vue-router'
import Favourites from '@/views/FavouritesView.vue'
import Catalog from '@/views/CatalogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: Catalog,
    },
    {
      path: '/favourites',
      name: 'Favourites',
      component: Favourites,
    }
  ]
})

export default router
