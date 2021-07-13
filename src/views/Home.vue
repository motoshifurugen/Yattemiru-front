<template>
  <div class="home">
    <v-row dense>
      <v-col cols="4" class="news-box">
        <p>お知らせ</p>
        <div class="news overflow-y-auto">
          <News></News>
        </div>
      </v-col>
      <v-col cols="6">
        メイン
      </v-col>
      <v-col cols="2">
        登録・ログイン
      </v-col>
    </v-row>
    <div class="category">
      <v-row dense>
        <v-col
          v-for="(category, c) in categories"
          :key="c"
          cols="6"
          class="category-box overflow-x-auto"
        >
          <v-card
            class="mx-auto"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1 category-name">
                   <p><span class="under">{{ category.title }}</span></p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn
                v-for="(item, i) in category.buttons"
                :key="i"
                outlined
                rounded
                large
                :color="item.color"
                :to="item.link"
                class="item-btn"
              >
                {{ item.name }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.under {
  display: block;
  border-bottom: solid 2px black;
  margin-bottom: -10px;
}
.category-box {
  margin: 1em auto 0;
  max-width: 48%;
}
.news-box p {
  text-align: center;
  margin-top: 1em;
  font-weight: bold;
  color: orange;
}
.news {
  max-height: 300px;
  margin: 0.5em;
}
</style>

<script>
import News from './News.vue'

  export default {
    components: {
      News
    },
    data: () => ({
      categories: [
        {
          title: '最近流行りの...',
          buttons: [
            {
              id: '1',
              name: 'プログラミング',
              link: '/page/1',
              color: '#880E4F'
            },
            {
              id: '2',
              name: 'IT',
              link: '/page/2',
              color: '#880E4F'
            },
            {
              id: '3',
              name: 'Youtube',
              color: '#880E4F'
            }
          ]
        },
        {
          title: '学問を気軽に！',
          buttons: [
            {
              id: '4',
              name: '英語',
              color: '#880E4F'
            },
            {
              id: '5',
              name: '心理学',
              color: '#880E4F'
            },
            {
              id: '6',
              name: '物理',
              color: '#880E4F'
            },
            {
              id: '14',
              name: '数学',
              color: '#880E4F'
            },
            {
              id: '15',
              name: '教員採用試験',
              color: '#880E4F'
            }
          ]
        },
        {
          title: '趣味で充実',
          buttons: [
            {
              id: '7',
              name: '読書',
              color: '#880E4F'
            },
            {
              id: '8',
              name: 'ギター',
              color: '#880E4F'
            },
            {
              id: '9',
              name: 'カメラ',
              color: '#880E4F'
            },
            {
              id: '10',
              name: 'ピアノ',
              color: '#880E4F'
            },
            {
              id: '12',
              name: 'イラスト',
              color: '#880E4F'
            },
            {
              id: '28',
              name: '旅行',
              color: '#880E4F'
            },
          ]
        },
        {
          title: 'スポーツで体も健康に',
          buttons: [
            {
              id: '19',
              name: 'ボルダリング',
              color: '#880E4F'
            },
            {
              id: '20',
              name: 'サーフィン',
              color: '#880E4F'
            },
            {
              id: '21',
              name: '筋トレ',
              color: '#880E4F'
            },
            {
              id: '29',
              name: 'ランニング',
              color: '#880E4F'
            },
            {
              id: '30',
              name: 'ボクシング',
              color: '#880E4F'
            },
          ]
        },
        {
          title: '自分と向き合う',
          buttons: [
            {
              id: '22',
              name: '自己分析',
              color: '#880E4F'
            },
          ]
        },
        {
          title: '芸術をこの手に',
          buttons: [
            {
              id: '11',
              name: '絵画',
              color: '#880E4F'
            },
            {
              id: '33',
              name: '歌',
              color: '#880E4F'
            },
            {
              id: '34',
              name: 'ファッション',
              color: '#880E4F'
            },
          ]
        },
        {
          title: '実生活で役にたつ',
          buttons: [
            {
              id: '13',
              name: '料理',
              color: '#880E4F'
            },
          ]
        },
        {
          title: '言葉を武器に',
          buttons: [
            {
              id: '16',
              name: 'ブログ',
              color: '#880E4F'
            },
            {
              id: '17',
              name: '作詞',
              color: '#880E4F'
            },
            {
              id: '18',
              name: '物語作成',
              color: '#880E4F'
            },
            {
              id: '25',
              name: 'Twitter',
              color: '#880E4F'
            },
          ]
        },
        {
          title: '日常を飛び出す',
          buttons: [
            {
              id: '23',
              name: 'ミニチュア',
              color: '#880E4F'
            },
            {
              id: '24',
              name: 'ゲーム',
              color: '#880E4F'
            },
            {
              id: '31',
              name: '漫画・アニメ',
              color: '#880E4F'
            },
            {
              id: '32',
              name: '映画',
              color: '#880E4F'
            },
          ]
        },
        {
          title: 'ビジネスこそ正義',
          buttons: [
            {
              id: '26',
              name: '起業',
              color: '#880E4F'
            },
            {
              id: '27',
              name: '投資',
              color: '#880E4F'
            },
          ]
        },
      ],
    }),
  }
</script>
