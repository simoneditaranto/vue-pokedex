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

    created() {


    },

    mounted() {
        
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


    <div id="pokemon" v-if="progressiveBar()">

        <ul>

            <li>nome: {{ item.name }}</li>
            <li>altezza: {{ item.height }}</li>
            <li>peso: {{ item.weight }}</li>
            <img :src="item.sprites.front_default" :alt="item.name">

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

        </ul>

    </div>
    <div class="empty-pokemon" v-else>
        nessun pokemon selezionato
    </div>

</template>

<style lang="scss" scoped>

#pokemon {

    padding: 20px;

    border: 1px solid red;

    .stats {

        .stat {
            display: flex;
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