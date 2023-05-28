import {createStore} from 'vuex';
import createPersistedState from "vuex-persistedstate";
import { type Photo } from '@/api/Catalog';

export default createStore({
    state: {
        fav: {},
    },
    plugins: [createPersistedState()],
    getters: {
        isFavourite: (state: any) => (id: number) => !!state.fav[id],
    },
    actions: {
        toggle: (context: any, photo: Photo) => {
            if (context.getters.isFavourite(photo.id)) {
                context.commit('REMOVE', photo);
            } else {
                context.commit('ADD', photo);
            }
        }
    },
    mutations: {
        ADD: (state: any, photo: Photo) => {
            // localStorage id 5Mb max, maybe it is worth storing only id's.
            // but in this case we'll get plenty of requests in Favourites page.
            state.fav[photo.id] = photo;
        },
        REMOVE: (state: any, photo: Photo) => {
            delete state.fav[photo.id];
        },
    }
});