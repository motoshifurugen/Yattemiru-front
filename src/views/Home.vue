<template>
  <div class="home">
    <v-row dense>
      <v-col cols="3" class="news-box">
        <p>お知らせ</p>
        <div class="news overflow-y-auto">
          <News></News>
        </div>
      </v-col>
      <v-col cols="6" class="main">
        <div class="title">
          <h1>とりあえず</h1>
          <h1>やってみる</h1>
        </div> 
      </v-col>
      <v-col cols="3" class="comment-box">
        <p>コメント投稿</p>
        <Contact></Contact>
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
.category {
  margin-top: 1em;
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
  max-height: 340px;
  margin: 0.5em;
}
.comment-box {
  padding: 0 2em;
}
.comment-box p{
  text-align: center;
  margin-top: 1em;
  font-weight: bold;
  color: #42A5F5;
}
.main {
  width: 100%;
  height: 340px;
  margin: auto 0;
  display: table;
}
.title {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.title h1 {
  font-size: 1.5em;
  margin: 0.5em;
}
.title h1:first-letter {
  font-size: 1.5em;
  color: #42A5F5;
}
</style>

<script>
import News from './News.vue'
import Contact from './Contact.vue'

  export default {
    components: {
      News,
      Contact
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
              color: '#1E88E5'
            },
            {
              id: '2',
              name: 'IT',
              link: '/page/2',
              color: '#AD1457'
            },
            {
              id: '3',
              name: 'Youtube',
              link: '/page/3',
              color: '#D50000'
            }
          ]
        },
        {
          title: '学問を気軽に！',
          buttons: [
            {
              id: '4',
              name: '英語',
              color: '#9C27B0'
            },
            {
              id: '5',
              name: '心理学',
              color: '#4CAF50'
            },
            {
              id: '6',
              name: '物理',
              color: '#795548'
            },
            {
              id: '14',
              name: '数学',
              color: '#0091EA'
            },
            {
              id: '15',
              name: '教員採用試験',
              color: '#4A148C'
            }
          ]
        },
        {
          title: '趣味で充実',
          buttons: [
            {
              id: '7',
              name: '読書',
              color: '#009688'
            },
            {
              id: '8',
              name: 'ギター',
              color: '#E65100'
            },
            {
              id: '9',
              name: 'カメラ',
              color: '#8BC34A'
            },
            {
              id: '10',
              name: 'ピアノ',
              color: '#0277BD'
            },
            {
              id: '12',
              name: 'イラスト',
              color: '#FF5722'
            },
            {
              id: '28',
              name: '旅行',
              color: '#E91E63'
            },
          ]
        },
        {
          title: 'スポーツで体も健康に',
          buttons: [
            {
              id: '19',
              name: 'ボルダリング',
              color: '#6D4C41'
            },
            {
              id: '20',
              name: 'サーフィン',
              color: '#0091EA'
            },
            {
              id: '21',
              name: '筋トレ',
              color: '#D50000'
            },
            {
              id: '29',
              name: 'ランニング',
              color: '#00BFA5'
            },
            {
              id: '30',
              name: 'ボクシング',
              color: '#000000'
            },
          ]
        },
        {
          title: '自分と向き合う',
          buttons: [
            {
              id: '22',
              name: '自己分析',
              color: '#9E9E9E'
            },
          ]
        },
        {
          title: '芸術をこの手に',
          buttons: [
            {
              id: '11',
              name: '絵画',
              color: '#F9A825'
            },
            {
              id: '33',
              name: '歌',
              color: '#4DD0E1'
            },
            {
              id: '34',
              name: 'ファッション',
              color: '#7986CB'
            },
          ]
        },
        {
          title: '実生活で役にたつ',
          buttons: [
            {
              id: '13',
              name: '料理',
              color: '#827717'
            },
          ]
        },
        {
          title: '言葉を武器に',
          buttons: [
            {
              id: '16',
              name: 'ブログ',
              color: '#5D4037'
            },
            {
              id: '17',
              name: '作詞',
              color: '#00796B'
            },
            {
              id: '18',
              name: '物語作成',
              color: '#40C4FF'
            },
            {
              id: '25',
              name: 'Twitter',
              color: '#03A9F4'
            },
          ]
        },
        {
          title: '日常を飛び出す',
          buttons: [
            {
              id: '23',
              name: 'ミニチュア',
              color: '#C0CA33'
            },
            {
              id: '24',
              name: 'ゲーム',
              color: '#F06292'
            },
            {
              id: '31',
              name: '漫画・アニメ',
              color: '#673AB7'
            },
            {
              id: '32',
              name: '映画',
              color: '#607D8B'
            },
          ]
        },
        {
          title: 'ビジネスこそ正義',
          buttons: [
            {
              id: '26',
              name: '起業',
              color: '#006064'
            },
            {
              id: '27',
              name: '投資',
              color: '#3F51B5'
            },
          ]
        },
      ],
    }),
  }
</script>
