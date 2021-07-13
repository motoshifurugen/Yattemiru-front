<template>
  <div class="top">
    <div class="title">
      <h1>とりあえず</h1>
      <h1>やってみる</h1>
      <v-btn
        color="error"
        to="/home"
        class="start-btn"
        x-large
      >
        とりあえず始める
      </v-btn>
    </div> 
  </div>
</template>

<style scoped>
.top {
  width: 100%;
  height: 100%;
  display: table;
}
.title {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.title h1 {
  font-size: 3em;
  margin: 1em;
}
.title h1:first-letter {
  font-size: 1.5em;
  color: #42A5F5;
}
.start-btn {
  margin-top: 3em;
}
</style>