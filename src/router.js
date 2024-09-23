import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ShowPokemon from './pages/ShowPokemon.vue';

const router = createRouter({

    history: createWebHistory(),

    routes: [

        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/show-pokemon/:id',
            name: 'show-pokemon',
            component: ShowPokemon,
        },

    ],

});

export { router };