<script>

export default {

    name: 'AppPokedex',

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

    <div id="pokedex">
        
        <div class="pokemon">nome: {{ item.name }}</div>

    </div>

</template>

<style lang="scss" scoped>

#pokedex {
    padding: 20px;

    border: 1px solid rgb(124, 0, 124);

    .pokemon {

        &:hover {
            text-decoration: underline;

            cursor: pointer;
        }
    }
}

</style>