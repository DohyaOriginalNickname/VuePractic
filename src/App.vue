<template>
  <div id="app">
    <!-- App.vue -->
    <v-app>
      <v-navigation-drawer app temporary v-model="drawer">
        <v-list>
          <v-list-item 
          v-for="link of links"
          :key="link.title"
          :to="link.url" >
            <v-list-item-icon>
              <v-icon>
                {{link.icon}}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="link.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app dark color="red">
        <v-app-bar-nav-icon 
        class="hidden-md-and-up"
        @click="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title >
          <router-link to="/" tag="span" class="pointer">Ad application</router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
          <div class="hidden-sm-and-down">
            <v-btn 
            icon
            v-for="link of links"
            :key="link.title"
            :to="link.url"
            >
              <v-icon >{{link.icon}}</v-icon>
              
            </v-btn>
          </div>
      </v-app-bar>
      <br>
      <v-main>
          <router-view></router-view>
      </v-main>
      
    </v-app>
  </div>
</template>

<script>
export default {
  data(){
    return{
      drawer: false,
      links:[
        {title: 'Login',icon: 'mdi-lock',url: '/login'},
        {title: 'Registration',icon: 'mdi-face-man',url: '/registration'},
        {title: 'Orders',icon: 'mdi-bookmark-outline',url: '/orders'},
        {title: 'New ad',icon: 'mdi-file-plus',url: '/new'},
        {title: 'My ads',icon: 'mdi-format-list-bulleted',url: '/list'}
      ]
    }
  }
}
</script>

<style scoped>
  .pointer{
    cursor: pointer;
  }
</style>
