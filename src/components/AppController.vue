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
                // console.log(res.data.stats);
                this.actualPokemon = res.data;
                // console.log(this.actualPokemon);

                })

                .catch(error => {

                    console.error('Errore nella richiesta', error);
                    this.actualPokemon = [];

                });

                console.log(this.actualPokemon);

            };

        },

        // metodo che aggiunge il pokemon cercato al pokedex
        addToPokedex() {

            this.pokedex.push(this.actualPokemon);

            console.log(this.pokedex);

            // localStorage.setItem('pokedex', JSON.stringify(this.pokedex));

        },

        // metodo che rimuove il pokemon attuale dal pokedex, se è gia presente
        removeToPokedex() {

            const indexToRemove = this.pokedex.indexOf(this.actualPokemon);

            this.pokedex.splice(indexToRemove, 1);

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

    <h3>Pokemon cercato</h3>

    <AppSearch @dataSent="handleData" />

    <div class="pokemon-container" v-if="actualPokemon != ''">

        <AppPokemon :item="actualPokemon"></AppPokemon>

        <button 
            v-if="!pokedex.includes(actualPokemon)"
            @click="addToPokedex()"
        >
            Cattura
        </button>

        <button 
            v-if="pokedex.includes(actualPokemon)"
            @click="removeToPokedex()"
        >
            Rimuovi
        </button>

    </div>

    <AppPokedex
        @pokemonSent="handleActualPokemon"
        :item="pokedex"
    />
    


</template>

<style>


</style>