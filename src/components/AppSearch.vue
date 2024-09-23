<script>
// import { store } from '../store.js';

export default {

    name: 'AppSearch',

    data() {
        return {

            // store,

            userPokemonName: '',

        }
    },

    methods: {

        // metodo che scatena l'evento di invio dei dati al componente di visualizzazione
        // del pokemon
        sendPokemonName() {
            this.$emit('dataSent', this.userPokemonName);
        },

    },

}


</script>

<template>

    <div id="search-item">
        <label for="">Cerca il tuo pokemon</label>
        <input 
            type="text" 
            placeholder="Inserisci il nome del pokemon"
            v-model="userPokemonName"
            @keyup.enter="sendPokemonName()"
        >

        <button class="btn" @click="sendPokemonName()">Cerca</button>
    </div>

</template>



<style lang="scss">

#search-item {
    display: flex;

    // font-size: 1.5em;

    color: white;

    label{
        margin-right: 10px;
    }

    input{
        padding: 0 10px;

        font-size: .8em;

        color: black;

        background-color: white;
    }

    button{
        width: 50px;
    }
}

</style>