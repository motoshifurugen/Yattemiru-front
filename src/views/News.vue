<template>
    <div class="news">
        <v-card v-for="(news, i) in info" :key="i">
            <v-card-text>
                <div>{{ news.created }}</div>
                <p class="display-1 text--primary">
                    {{ news.comment }}
                </p>
            </v-card-text>
        </v-card>
    </div>
</template>

<style scoped>
.news {
    width: 98%;
    height: 100%;
    /* background-color: orange; */
}
.news p {
    font-size: 1.25em !important;
}
.v-card {
    border: 1px solid orange;
    margin: 0.5em;
}
.display-1 {
    border-bottom: 1px dotted gray;
}
</style>

<script>
export default {
  data: () => ({
    info : [
      {
        id: 1,
        comment: 'コメントです',
        created: '2021/07/14'
      },
      {
        id: 2,
        comment: 'コメントです2',
        created: '2021/07/14'
      },
      {
        id: 3,
        comment: 'コメントです3',
        created: '2021/07/14'
      },
      {
        id: 4,
        comment: 'コメントです4',
        created: '2021/07/14'
      }
    ]
  }),
};
</script>