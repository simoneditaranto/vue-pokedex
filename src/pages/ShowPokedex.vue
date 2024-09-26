<script>
import { store } from '../store';

export default {

    name: 'ShowPokedex',

    created() {

        if(localStorage.getItem('pokedex') != null) {

            this.store.pokedex = JSON.parse(localStorage.getItem('pokedex'));

        }
 
    },

    data() {

        return {

            store,
            
            pokemonTypes: [
                {
                    typeName : 'fire',
                    icon : 'fire.svg',
                    color : '#E4613E',
                },
                {
                    typeName : 'grass',
                    icon : 'grass.svg',
                    color : '#439837',
                },
                {
                    typeName : 'electric',
                    icon : 'electric.svg',
                    color : '#DFBC28',
                },
                {
                    typeName : 'poison',
                    icon : 'poison.svg',
                    color : '#9354CB',
                },
                {
                    typeName : 'ice',
                    icon : 'ice.svg',
                    color : '#47C8C8',
                },
                {
                    typeName : 'fighting',
                    icon : 'fighting.svg',
                    color : '#E49021',
                },
                {
                    typeName : 'ground',
                    icon : 'ground.svg',
                    color : '#A4733C',
                },
                {
                    typeName : 'rock',
                    icon : 'rock.svg',
                    color : '#A9A481',
                },
                {
                    typeName : 'psychic',
                    icon : 'psychic.svg',
                    color : '#E96C8C',
                },
                {
                    typeName : 'bug',
                    icon : 'bug.svg',
                    color : '#9F9F28',
                },
                {
                    typeName : 'ghost',
                    icon : 'ghost.svg',
                    color : '#6F4570',
                },
                {
                    typeName : 'steel',
                    icon : 'steel.svg',
                    color : '#74B0CB',
                },
                {
                    typeName : 'water',
                    icon : 'water.svg',
                    color : '#3099E1',
                },
                {
                    typeName : 'fairy',
                    icon : 'fairy.svg',
                    color : '#E18CE1',
                },
                {
                    typeName : 'dragon',
                    icon : 'dragon.svg',
                    color : '#576FBC',
                },
                {
                    typeName : 'dark',
                    icon : 'dark.svg',
                    color : '#4F4747',
                },
                {
                    typeName : 'flying',
                    icon : 'flying.svg',
                    color : '#74AAD0',
                },
                {
                    typeName : 'normal',
                    icon : 'normal.svg',
                    color : '#828282',
                },
                

            ],

        }

    },

    methods: {

        selecedtBackSprie(actualPokemon) {
            
            // il metodo map() restituisce un nuovo array actualTypes con i nomi dei tipi pokemon
            // prima però mi assicuro che this.pokemon.types sia definito
            const actualTypes = actualPokemon.types ? actualPokemon.types.map(t => t.type.name) : [];

            for(let i = 0; i < this.pokemonTypes.length; i++) {
                if(this.pokemonTypes[i].typeName === actualTypes[0]) {
                    return this.pokemonTypes[i].color;
                }
            }

        },

    },

}

</script>

<template>

<h3>Pokedex</h3>

<div id="pokedex">

    <router-link 
        :to="{name: 'show-pokemon', params: { id: actualPokemon.name } }"
        v-for="actualPokemon in store.pokedex" 
        class="single-pokemon" 
        :style="{ backgroundColor: selecedtBackSprie(actualPokemon) }" 
    >

        <img :src="actualPokemon.sprites.other['official-artwork'].front_default" alt="">

        <div class="name">{{ actualPokemon.name }}</div>

    </router-link>

</div>

</template>

<style lang="scss">

#pokedex {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    padding: 10px;

    color: white;

    background-color: #272528;

    .single-pokemon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        padding: 10px;

        width: calc(100% / 2 - 10px / 2 * 1);
        aspect-ratio: 1 / 1;

        border-radius: 15px;

        img {
            width: 120px;
        }

        .name {

            text-decoration: none !important;
            
        }

    }

}


</style>