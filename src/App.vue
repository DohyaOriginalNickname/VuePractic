<template>
  <div id="app">
    <!-- App.vue -->
    <v-app>
      <v-navigation-drawer app temporary>
        
      </v-navigation-drawer>
      <v-app-bar app dark color="red">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Ad application</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
          <!-- If using vue-router -->
          <router-view></router-view>
      </v-main>
      
    </v-app>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg: "Hello world"
    }
  }
}
</script>

<style lang="scss">
</style>
