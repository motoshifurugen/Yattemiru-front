<template>
  <v-app>
    <v-app-bar color="red" dark app>
      <v-btn color="red" depressed to="/home">
        <v-toolbar-title>やってみる</v-toolbar-title>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
  }
};
</script>