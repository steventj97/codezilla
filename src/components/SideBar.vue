<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      class="primary white--text"
    >
      <v-list class="mt-2 mb-3">
				<v-flex
					xs12
					text-xs-center
					layout
					align-center
					justify-center
				>
					<span style="font-size:20px;font-weight:bold;margin-top:0px;color:white">EUPHORIA</span>
				</v-flex>
			</v-list>
      <v-list style="margin-top:-14px;" >     
        <template v-for="item in items" :to="item.href">
          <v-list-group
            v-model="item.model"
            :key="item.text"
            v-if="item.children"
          >
            <v-list-tile slot="activator">
              <v-list-tile-action style="color:white;">
                <v-icon class="white--text">{{item.header}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content style="color:white;">
                <v-list-tile-title >{{item.text}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i" 
              :to="child.href"
            >
              <v-list-tile-action v-if="child.icon" style="color:white;">
                <v-icon style="color:#white">{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title style="margin-left:57px;color:white;" >
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" :to="item.href">
            <v-list-tile-action style="color:white;">
              <v-icon class="white--text">{{ item.header }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title style="color:white;">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="white" fixed app >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" style="color:black;" ></v-toolbar-side-icon>
      <!-- <v-toolbar-title
        class="black--text"
        style="font-weight:bold;font-size:20px"
      >
        Dashboard
      </v-toolbar-title> -->
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        {
          href: '/home',
          header: 'dashboard',
          icon: 'keyboard_arrow_up',
          text: 'Dashboard',
          model: false
        },
        {
          header: 'work',
          icon: 'keyboard_arrow_up',
          text: 'Master Data',
          model: false,
          children: [
            { text: 'Approved Status', href: '/home/child' },
            { text: 'Department Information', href: '/contact' },
            { text: 'Education Details', href: '/master/education_detail' },
          ]
        },
      ]
    }),
    props: {
      source: String
    }
  }
</script>
<style>
.v-list__group__header__append-icon i{
  color:white !important
}
</style>