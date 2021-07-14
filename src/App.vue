<template>
  <v-app>
    <v-container class="container">
      <v-app-bar flat color="red" hide-on-scroll dark app>
        <v-btn color="red" depressed to="/home">
          <v-toolbar-title>やってみる</v-toolbar-title>
        </v-btn>
        <v-spacer></v-spacer>
        <Login></Login>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import Login from './views/Login.vue'
export default {
  components: {
    Login
  }
};
</script>