<script>
import axios from 'axios';

import AppPokemon from '../components/AppPokemon.vue';

export default {

    name: 'HomePage',

    components: {

        AppPokemon,

    },

    data() {

        return {

            pokemonNameList: [],

            pokemonList: [],

        }

    },

    created() {

        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`)
        .then(res => {

            this.pokemonNameList = res.data.results;

            // console.log(res.data.results)

            this.giveUrl();

           


        })


    },

    methods: {

        giveUrl() {

                for(let i = 0; i < this.pokemonNameList.length; i++) {
                        // console.log(this.pokemonNameList[i].url)
                        axios.get(this.pokemonNameList[i].url)
                        .then(res => {
                            // console.log(res.data)
                            // const actualResult = res.data;
                            this.pokemonList.push(res.data);
                                     
                        })
    
                    }
                    // console.log(this.pokemonList)

        },

        changeActualPokemon(actualPokemon) {
            this.actualPokemon = actualPokemon;

            // console.log(this.actualPokemon)
        },

    },

}

</script>


<template>

    <div class="pokemon-list">

        <AppPokemon 
            v-for="actualPokemon in pokemonList" 
            :item="actualPokemon"
            @click="changeActualPokemon(actualPokemon)"
        >
        </AppPokemon>
        
    </div>


</template>


<style lang="scss">

.pokemon-list {
    display: flex;
    flex-wrap: wrap;
}

</style>