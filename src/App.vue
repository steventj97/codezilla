<template>
  <div id="app">
    <v-app id="inspire" >
       <router-view></router-view>
      <!-- <landing-page></landing-page> -->
    </v-app>
  </div>
</template>

<script>
import LandingPage from '@/page/LandingPage'
  export default {
    components: {
        'landing-page': LandingPage
    },
    data: () => ({
    }),
    methods: {
    }
  }
</script>

<style>

</style>
