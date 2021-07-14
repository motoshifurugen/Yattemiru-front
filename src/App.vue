<template>
  <v-app>
    <v-app-bar color="red" dark app>
      <v-btn color="red" depressed to="/home">
        <v-toolbar-title>やってみる</v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <Login></Login>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
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