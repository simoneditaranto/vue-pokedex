import  { reactive } from 'vue';

export const store = reactive({

    // stringa che contiene la scelta dell'utente
    userPokemonName: '',

    // variabile che registra il pokemon appena cercato
    actualPokemon: '',

});