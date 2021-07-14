<template>
    <div class="news">
        <v-card v-for="(news, i) in info" :key="i">
            <v-card-text>
                <div>{{ news.created }}</div>
                <p class="comment text--primary">
                    {{ news.comment }}
                </p>
                <span class="comment-category">
                    {{ news.category }}
                </span>
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
    font-size: 1.1em !important;
}
.v-card {
    border: 1px solid orange;
    margin: 0.5em;
}
.comment {
    border-bottom: 1px dotted gray;
}
</style>

<script>
export default {
  data: () => ({
    info : [
      {
        id: 1,
        comment: '【ドットインストール】お世話になっています。動画がいいんだよなー。パソコン触れない時も音声で学習できる。',
        category: 'プログラミング',
        created: '2021/07/14'
      },
      {
        id: 2,
        comment: '【Fコード】Fコードが綺麗に弾けるようになりました！',
        category: 'ギター',
        created: '2021/07/14'
      },
      {
        id: 3,
        comment: '【プロテイン】プロテインを飲みたいがために筋トレしているようなもの（笑）',
        category: '筋トレ',
        created: '2021/07/14'
      },
      {
        id: 4,
        comment: '【物理の読み物】C・ロヴェリのすごい物理学入門は薄くて読みやすい。なんか研究者たちってすげーってなった。',
        category: '物理',
        created: '2021/07/14'
      }
    ]
  }),
};
</script>