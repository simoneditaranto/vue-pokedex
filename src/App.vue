<script>
import axios from 'axios';

import { store } from './store.js';

import AppSearch from './components/AppSearch.vue';


export default {

  components: {

    AppSearch,

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
          console.log(res.data);
        })
      };

    },

  },

}

</script>

<template>

  <h1>PokeAPI</h1>

  <AppSearch @search="searchPokemonByName()"></AppSearch>

</template>

<style scoped>


</style>
