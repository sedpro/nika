import {createStore} from 'vuex';
import createPersistedState from "vuex-persistedstate";

export const STORAGE_KEY = 'fav-vuejs'

export default createStore({
    state: {
        fav: [],
    },
    plugins: [createPersistedState()],
    getters: {
        isFavourite: (state: any) => (id: number) => state.fav.includes(id),
    },
    actions: {
        toggle: (context: any, id: number) => {
            if (context.getters.isFavourite(id)) {
                context.commit('REMOVE', id);
            } else {
                context.commit('ADD', id);
            }
        }
    },
    mutations: {
        ADD: (state: any, id: number) => {
            state.fav.push(id);
        },
        REMOVE: (state: any, id: number) => {
            state.fav = state.fav.filter((i:number) => i !== id);
        },
    }
});