<script>

import AppHeader from './components/AppHeader.vue';
import AppController from './components/AppController.vue';

export default {

  components: {

    AppHeader,
    AppController,

  },

}

</script>

<template>

  <AppHeader></AppHeader>

  <!-- <AppController></AppController> -->

  <router-view></router-view>



</template>

<style scoped>


</style>
