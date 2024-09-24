<script>
import axios from 'axios';

export default {

    name: 'ShowPokemon',

    created() {

        this.pokemonName = this.$route.params.id,

        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName.toLowerCase()}`)
        .then(res => {
            this.pokemon = res.data;
            this.pokemonSprite = res.data.sprites.other['official-artwork'].front_default;
        });

        this.progressiveBar();

        

    },

    data() {

        return {

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

            // variabile che memorizza il pokemon da visualiizare
            pokemon: [],

            // variabile che memorizza il nome del pokemon per effettuare la chiamata api
            pokemonName: '',

            // variabile che memorizza l'immagine del pokemon quando
            // viene effettuata la chiamata api
            pokemonSprite: '',

        }

    },

    methods: {

        progressiveBar() {

            const backColors = ['#c43c42', '#f4a024', '#199fe9', '#86aab9', '#348a3d', '#64113a'];

            if(this.pokemon != '') {

                setTimeout(() => {
                const barFill = document.querySelectorAll('.bar-fill');

                for(let i = 0; i < barFill.length; i++) {
                    const power = (this.pokemon.stats[i].base_stat / 200) * 100;
                    barFill[i].style.width = power + '%';
                    barFill[i].style.backgroundColor = backColors[i];
                }

                }, 0);

            }

        },

        selectedColorType(actualType) {

            const selectedType = this.pokemonTypes.find(
                element => element.typeName === actualType.type.name
            );

            return selectedType ? selectedType.color : 'black';

        },

        selectedIconType(actualType) {

            const selectedType = this.pokemonTypes.find(
                element => element.typeName === actualType.type.name
            );

            return selectedType ? selectedType.icon : 'null';

        },

    },

}

</script>

<template>


<div id="pokemon">

    <div class="sprite-container">

        <img :src="pokemonSprite" :alt="pokemon.name">

    </div>

    <div class="pokemon-details">

        <div class="pokemon-name">
            {{ pokemon.name }}
        </div>

        <div class="types">
                <div 
                    v-for="actualType in pokemon.types"
                    class="type" 
                    :style="{ backgroundColor: selectedColorType(actualType) }"
                >
                    <img :src="`/icons/${selectedIconType(actualType)}`" alt="">
                    {{ actualType.type.name.toUpperCase() }}
                </div>
            </div>

        <div class="pokemon-dim">

            <div class="pokemon-height">
                0.{{ pokemon.height }} M
                <span>Weight</span>
            </div>
            <div class="pokemon-weight">
                {{ pokemon.weight / 10}} KG
                <span>Height</span>
            </div>

        </div>

        <div class="pokemon-stats">

            Base Stats

            <div class="stat"v-for="actualStats in pokemon.stats">
                {{ actualStats.stat.name }}: 
                <div class="progressive-bar">
                    <div class="bar-fill">
                        {{ progressiveBar() }}
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

    background-color: #272528;

    .sprite-container {
        padding: 20px 0;
        margin-bottom: 30px;
        
        text-align: center;

        border-radius: 0 0 30px 30px;

        background-color: #439837;

        img {

            width: 200px;

        }
    }

    .pokemon-details {
        

        .pokemon-name {
            margin-bottom: 15px;

            font-size: 2em;
        }

        .types {
            display: flex;
            justify-content: center;
            gap: 50px;

            padding: 0 40px;
            margin-bottom: 20px;

        .type {
            display: flex;
            justify-content: space-around;
            align-items: center;

            padding: 5px;

            width: 120px;

            text-align: center;

            border-radius: 10px;
        }

            img {
                width: 20px;
            }

        }

        .pokemon-dim {
            display: flex;
            justify-content: space-around;
            // gap: 50px;

            margin-bottom: 30px;

            .pokemon-weight {
                display: flex;
                flex-direction: column;
                gap: 12px;
                
                span {
                    color: rgba(255, 255, 255, .5);
                }
            }

            .pokemon-height {
                display: flex;
                flex-direction: column;
                gap: 12px;
                
                span {
                    color: rgba(255, 255, 255, .5);
                }
            }
        }

        .pokemon-stats {
            display: flex;
            flex-direction: column;

            padding: 0 30px 60px;

            .stat {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .progressive-bar {
        
                    width: 200px;
                    height: 10px;

                    border-radius: 10px;
        
                    background-color: white;
        
                    .bar-fill {
                        
                        height: 100%;

                        border-radius: 10px;
        
                    }
                    
                }
            }
            }
            



    }

}

</style>