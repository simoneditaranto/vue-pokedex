<script>

export default {

    name: 'AppHeader',

}

</script>

<template>

<h1>PokeAPI</h1>

<div class="app-links">

    <ul>
        <li>
            <router-link :to="{name: 'home'}">Homepage</router-link>
            
        </li>
        <li>Pokedex</li>
    </ul>

</div>

</template>

<style>

</style>