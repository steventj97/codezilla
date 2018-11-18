
<template>
    <div>
        <sidebar></sidebar>
        <v-content>
        <v-container fluid fill-height>
            <v-layout>
                <router-view></router-view>
            </v-layout>
        </v-container>
        </v-content>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar'
  export default {
    components: {
        'sidebar': SideBar
    },
    data: () => ({
    }),
    methods: {
    }
  }
</script>