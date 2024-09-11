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

}

</script>

<template>

    <div id="pokemon">
        
        <ul>
            <li>nome: {{ item.name }}</li>
            <li>altezza: {{ item.height }}</li>
            <li>peso: {{ item.weight }}</li>

        </ul>

    </div>

</template>

<style>



</style>