<script>

export default {

    name: 'AppPokemon',

    props: {

        item: Object,
    
    },

    data() {
        
        return {


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
                <div class="type" v-for="actualType in item.types">
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
            padding: 5px;

            width: 100px;

            text-align: center;

            border: 1px solid #58c53c;
            border-radius: 10px;
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