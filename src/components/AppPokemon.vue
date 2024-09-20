<script>

export default {

    name: 'AppPokemon',

    props: {

        item: Object,
    
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

        }

    },

    methods: {

        progressiveBar() {

            if(this.item != '') {

                setTimeout(() => {
                    const barFill = document.querySelectorAll('.bar-fill');
        
                    for(let i = 0; i < barFill.length; i++) {
                        const power = (this.item.stats[i].base_stat / 200) * 100;
                        // barFill[i].style.width = `${this.item.stats[i].base_stat}px`;
                        barFill[i].style.width = power + '%';
                    }

                }, 0);

                return true;
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


    <div id="pokemon" class="container" v-if="progressiveBar()">

        <div class="pokemon-sprite">

            <!-- <img :src="item.sprites.front_default" :alt="item.name"> -->
            <img :src="item.sprites.other['official-artwork'].front_default" :alt="item.name">
            <!-- <img :src="item.sprites.other.showdown.front_default" :alt="item.name"> -->

        </div>

            <div class="pokemon-name">{{ item.name.charAt(0).toUpperCase() + item.name.slice(1) }}</div>

            <div class="types">
                <div 
                    v-for="actualType in item.types"
                    class="type" 
                    :style="{ backgroundColor: selectedColorType(actualType) }"
                >
                    <img :src="`/icons/${selectedIconType(actualType)}`" alt="">
                    {{ actualType.type.name.toUpperCase() }}
                </div>
            </div>

            <div class="pokemon-desc">
                <div class="pokemon-height">0.{{ item.height }} M</div>
                <div class="pokemon-weight">{{ item.weight / 10}} KG</div>
            </div>

        <div class="stats">

            <div class="stat"v-for="actualStats in item.stats">
                {{ actualStats.stat.name }}: 
                <div class="progressive-bar">
                    <div class="bar-fill">
                        <!-- {{ actualStats.base_stat }} -->
                    </div>
                </div>
            </div>
            
        </div>

        

    </div>
    <div class="empty-pokemon" v-else>
        nessun pokemon selezionato
    </div>

</template>

<style lang="scss" scoped>

#pokemon {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;

    width: 400px;

    border: 1px solid red;
    border-radius: 5%;

    color: white;

    background: linear-gradient(to bottom, rgba(5, 11, 26, 0.75), rgba(48, 92, 21, 0.75));

    .pokemon-sprite {
        width: 200px;

        img {
            width: 100%;
        }
    }

    .pokemon-name {
        font-size: 2em;
    }

    .types {
        display: flex;
        gap: 50px;

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

    .pokemon-desc {
        display: flex;
        gap: 50px;
    }

    .stats {
        display: flex;
        flex-direction: column;
        gap: 10px;
        
        .stat {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
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