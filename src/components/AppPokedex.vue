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

    <div id="pokedex">
        
        <div class="pokemon" v-for="actualItem in item">

            <!-- <span class="pokemon-name" @click="sendActualPokemon(actualItem)">
                {{ actualItem.name }}
            </span> -->
            
            <div class="sprite-container" @click="sendActualPokemon(actualItem)">

                <img :src="actualItem.sprites.front_default" :alt="actualItem.name">

            </div>

        </div>
        

    </div>

</template>

<style lang="scss" scoped>

#pokedex {
    
    padding: 20px;

    border: 1px solid rgb(124, 0, 124);

    .pokemon {

        .pokemon-name {

            cursor: pointer;

        }

    }

    
}

</style>