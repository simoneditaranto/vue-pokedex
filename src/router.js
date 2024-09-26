import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ShowPokemon from './pages/ShowPokemon.vue';
import ShowPokedex from './pages/ShowPokedex.vue';

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
        {
            path: '/pokedex',
            name: 'pokedex',
            component: ShowPokedex,
        },

    ],

});

export { router };