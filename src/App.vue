<script>
import axios from 'axios';

import { store } from './store.js';

import AppSearch from './components/AppSearch.vue';
import AppPokemon from './components/AppPokemon.vue';


export default {

  components: {

    AppSearch,
    AppPokemon,

  },

  data() {

    return {

      store,

    }

  },

  methods: {

    searchPokemonByName() {
      console.log('ricerca avviata');

      if(this.store.userPokemonName.trim() != '') {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.store.userPokemonName}`)
        .then(res => {
          console.log(res.data.stats);
          this.store.actualPokemon = res.data;
          console.log(this.store.actualPokemon);
        })
      };

    },

  },

}

</script>

<template>

  <h1>PokeAPI</h1>

  <AppSearch @search="searchPokemonByName()"></AppSearch>

  <AppPokemon :item="this.store.actualPokemon"></AppPokemon>

</template>

<style scoped>


</style>
