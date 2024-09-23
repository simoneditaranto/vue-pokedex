<script>

export default {

    name: 'AppPokedex',

    props: {

        item: Object,

    },

    data() {
        
        return {

            actualPokemon: '',

        }

    },

    methods: {

        // metodo che invia il nuovo pokemon attuale da visualizzare
        sendActualPokemon(actualItem) {

            this.actualPokemon = actualItem;

            this.$emit('pokemonSent', this.actualPokemon);

        },

    }

}

</script>

<template>

<h3>Pokedex</h3>

    <div id="pokedex">
        
        <div class="pokemon" v-for="actualItem in item">

            <!-- <span class="pokemon-name" @click="sendActualPokemon(actualItem)">
                {{ actualItem.name }}
            </span> -->
            
            <div class="sprite-container" @click="sendActualPokemon(actualItem)">

                <img :src="actualItem.sprites.front_default" :alt="actualItem.name">

                
            </div>
            
            <div class="pokemon-name">
                {{ actualItem.name }}
            </div>
            
        </div>
        

    </div>

</template>

<style lang="scss" scoped>

#pokedex {

    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    
    padding: 20px;

    border: 1px solid rgb(124, 0, 124);

    .pokemon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: calc(100% / 2 - 20px / 2 * 1);

        border: 1px solid black;

        border-radius: 10px;

        .pokemon-name {

            cursor: pointer;

        }

    }

    
}

</style>