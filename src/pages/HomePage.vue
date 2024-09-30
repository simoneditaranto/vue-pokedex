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

            // variabile che tiene conto delle pagine
            apiPageNumber: 1,
            limit: 20,
            offset: 0,

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

        },

        changeActualPokemon(actualPokemon) {

            this.actualPokemon = actualPokemon;

        },

        nextPage() {

            console.log('cliccato')

            this.apiPageNumber++;
            // this.limit += 20;
            this.offset += 20;

            this.pokemonList = [];

            axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${this.limit}&offset=${this.offset}`)
            .then(res => {

                this.pokemonNameList = res.data.results;

                this.giveUrl();


            })

        },

        previousPage() {

            this.apiPageNumber--;
            // this.limit -= 20;
            this.offset -= 20;

            this.pokemonList = [];

            axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${this.limit}&offset=${this.offset}`)
            .then(res => {

                this.pokemonNameList = res.data.results;

                this.giveUrl();


            })

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

     <!-- sezione per la paginazione -->
     <div class="pages">
        <div class="previous" :class="apiPageNumber == 1 ? 'none' : ''" @click="previousPage()">
            <i class="fa-solid fa-arrow-left"></i>
        </div>

        <div class="next">
            <i class="fa-solid fa-arrow-right" @click="nextPage()"></i>
        </div>
    </div>


</template>


<style lang="scss">

.pokemon-list {
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 10px;
}

.pages {
    display: flex;
    justify-content: center;
    gap: 20px;

    margin-bottom: 10px;

    div {
        padding: 10px;

        border-radius: 8px;

        background-color: aquamarine;

        &:hover {
            color: white;

            background-color: blue;
        }

        &.none {
            display: none;
        }
    }

}

</style>