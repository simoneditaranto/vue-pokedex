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

    methods: {

        

    },

}

</script>

<template>

    <div id="pokemon">

        <ul>

            <li>nome: {{ item.name }}</li>
            <li>altezza: {{ item.height }}</li>
            <li>peso: {{ item.weight }}</li>
            <img :src="item.sprites.front_default" :alt="item.name">

            <div class="stats">

                <ul>
                    <li v-for="actualStats in item.stats">
                        {{ actualStats.stat.name }}: {{ actualStats.base_stat }}
                    </li>
                </ul>
                
            </div>

        </ul>

    </div>
    <!-- <div class="empty-pokemon" v-else>

    </div> -->

</template>

<style>

#pokemon {

    padding: 20px;

    border: 1px solid red;
}

</style>