<script>
import axios from 'axios';

import { store } from './store.js';

import AppSearch from './components/AppSearch.vue';
import AppPokemon from './components/AppPokemon.vue';
import AppPokedex from './components/AppPokedex.vue';


export default {

  components: {

    AppSearch,
    AppPokemon,
    AppPokedex,

  },

  data() {

    return {

      store,

    }

  },

  methods: {

    // metodo che effettua la chiamata API
    searchPokemonByName() {
      console.log('ricerca avviata');

      if(this.store.userPokemonName.trim() != '') {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.store.userPokemonName}`)
        .then(res => {
          console.log(res.data.stats);
          this.store.actualPokemon = res.data;
          // console.log(this.store.actualPokemon);
        })
      };

    },

    // metodo che aggiunge il pokemon cercato al mio pokedex
    addToPokedex() {
      this.store.pokedex.push(this.store.actualPokemon);
  
      console.log(this.store.pokedex);
    },

    changeActualPokemon(actualItem) {
      this.store.actualPokemon = actualItem;
    },

    removeFromPokedex() {
      const indexToRemove = this.store.pokedex.indexOf(this.store.actualPokemon);
      // console.log(indexToRemove);
      this.store.pokedex.splice(indexToRemove, 1);
      // console.log(this.store.pokedex);
    },

  },


}

</script>

<template>

  <h1>PokeAPI</h1>

  <AppSearch @search="searchPokemonByName()"></AppSearch>

  <AppPokemon :item="this.store.actualPokemon"></AppPokemon>
  <button 
    v-if="this.store.pokedex.includes(this.store.actualPokemon)"
    @click="removeFromPokedex()"  
  >
    Rimuovi
  </button>

  <button 
    @click="addToPokedex()"
    v-if="!this.store.pokedex.includes(this.store.actualPokemon)"
  >
    Aggiungi
  </button>

  <AppPokedex 
    v-if="store.pokedex.length > 0"
    v-for="actualItem in this.store.pokedex"
    :item="actualItem"
    @click="changeActualPokemon(actualItem)"
  >
  </AppPokedex>

</template>

<style scoped>


</style>
