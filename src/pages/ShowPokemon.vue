<script>
import axios from 'axios';

export default {

    name: 'ShowPokemon',

    created() {

        this.pokemonName = this.$route.params.id,

        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName.toLowerCase()}`)
        .then(res => {
            this.pokemon = res.data;
        });

        this.progressiveBar();

        

    },

    data() {

        return {

            pokemon: [],

            pokemonName: '',

        }

    },

    methods: {

        progressiveBar() {

            if(this.pokemon != '') {

                setTimeout(() => {
                const barFill = document.querySelectorAll('.bar-fill');

                for(let i = 0; i < barFill.length; i++) {
                    const power = (this.pokemon.stats[i].base_stat / 200) * 100;
                    // barFill[i].style.width = `${this.item.stats[i].base_stat}px`;
                    barFill[i].style.width = power + '%';
                }

                }, 0);

                return true;

            }

        },

    },

}

</script>

<template>


<div id="pokemon">

    <div class="sprite-container">
        <img :src="pokemon.sprites.other['official-artwork'].front_default" :alt="pokemon.name">
    </div>

    <div class="pokemon-details">

        <div class="pokemon-name">
            {{ pokemon.name }}
        </div>

        <div class="pokemon-types">

            <div class="type" v-for="actualType in pokemon.types">
                {{ actualType.type.name.toUpperCase() }}
            </div>

        </div>

        <div class="pokemon-dim">

            <div class="pokemon-height">0.{{ pokemon.height }} M</div>
            <div class="pokemon-weight">{{ pokemon.weight / 10}} KG</div>

        </div>

        <div class="pokemon-stats">

            <div class="stat"v-for="actualStats in pokemon.stats">
                {{ actualStats.stat.name }}: 
                <div class="progressive-bar">
                    <div class="bar-fill">
                        
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>



</template>

<style lang="scss" scoped>

#pokemon {
    display: flex;
    flex-direction: column;

    text-align: center;

    color: white;

    .sprite-container {
        padding: 20px 0;
        
        text-align: center;

        border: 1px solid blue;
        border-radius: 0 0 30px 30px;

        
        img {

            width: 200px;

        }
    }

    .pokemon-details {
        background-color: #272528;

        .pokemon-name {
            
        }

        .pokemon-types {
            display: flex;
            justify-content: center;
            gap: 50px;

            .type {
                
                display: flex;
                justify-content: space-around;
                align-items: center;

                padding: 5px;

                width: 120px;

                text-align: center;

                border: 1px solid red;
                border-radius: 10px;

            }
        }

        .pokemon-dim {
            display: flex;
            justify-content: space-around;
            // gap: 50px;
        }

        .progressive-bar {

            width: 200px;
            height: 10px;

            border: 1px solid red;

            .bar-fill {
                // width: 0%;
                height: 100%;

                background-color: red;
            }

        }

    }

}

</style>