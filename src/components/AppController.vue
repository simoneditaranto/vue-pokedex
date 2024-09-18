<script>
import axios from 'axios';

import AppSearch from './AppSearch.vue';
import AppPokemon from './AppPokemon.vue';
import AppPokedex from './AppPokedex.vue';

export default {

    name: 'AppController',

    components: {

        AppSearch,
        AppPokemon,
        AppPokedex,

    },

    data() {

        return {

            // variabile che contiene il nome del pokemon scelto dall'utente
            userPokemonName: '',

            // variabile che contiene il pokemon attuale
            actualPokemon: [],

            // oggetto che contiene tutti i pokemon catturati
            pokedex: [],

            // isCatched: false,

        }

    },

    created() {

        if(localStorage.getItem('pokedex') != null) {

            this.pokedex = JSON.parse(localStorage.getItem('pokedex'));

        }
         
    },

    methods: {

        // metodo che gestisce la ricezione del nome del pokemon dal componente di ricerca
        handleData(pokemonName) {

            this.userPokemonName = pokemonName;
            // console.log(this.userPokemonName);

            this.searchPokemonByName();
            
        },

        // metodo che effettua la chiamata API
        searchPokemonByName() {

            // console.log('ricerca avviata');

            if(this.userPokemonName.trim() != '') {

                axios.get(`https://pokeapi.co/api/v2/pokemon/${this.userPokemonName.toLowerCase()}`)
                .then(res => {

                    this.actualPokemon = res.data;

                })

                .catch(error => {

                    this.actualPokemon = [];

                });


            };

        },

        // metodo che aggiunge il pokemon cercato al pokedex
        addToPokedex() {

            this.pokedex.push(this.actualPokemon);

            localStorage.setItem('pokedex', JSON.stringify(this.pokedex));

            console.log(this.pokedex);

            // localStorage.setItem('pokedex', JSON.stringify(this.pokedex));

        },

        // metodo che rimuove il pokemon attuale dal pokedex, se è gia presente
        removeToPokedex() {

            const indexToRemove = this.pokedex.indexOf(this.actualPokemon);

            this.pokedex.splice(indexToRemove, 1);

            localStorage.setItem('pokedex', JSON.stringify(this.pokedex));

            console.log(this.pokedex);

        },

        // metodo che gestisce il cambio del pokemon attuale da visualizzare dal pokedex
        handleActualPokemon(actualPokemon) {

            this.actualPokemon = actualPokemon;

        },

    },

}


</script>

<template>

    <AppSearch @dataSent="handleData" />

    <!-- <div class="pokemon-container" v-if="actualPokemon != '' && !isEmpty"> -->
        
        <AppPokemon :item="actualPokemon"></AppPokemon>

        <button 
            v-if="!pokedex.includes(actualPokemon) && actualPokemon != ''"
            @click="addToPokedex()"
        >
            Cattura
        </button>
        <!-- <button 
            v-if="!isCatched"
            @click="addToPokedex()"
        >
            Cattura
        </button> -->

        <button 
            v-if="pokedex.includes(actualPokemon) && actualPokemon != ''"
            @click="removeToPokedex()"
        >
            Rimuovi
        </button>
        <!-- <button 
            v-if="isCatched"
            @click="removeToPokedex()"
        >
            Rimuovi
        </button> -->

    <!-- </div> -->

    <AppPokedex
        @pokemonSent="handleActualPokemon"
        :item="pokedex"
    />
    


</template>

<style>


</style>