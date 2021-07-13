<template>
  <div class="page">
    <div class="title">
      <h1>{{ categories[$route.params.id - 1].title }}</h1>
    </div>
    <div class="description">
      <p>{{ categories[$route.params.id - 1].description }}</p>
    </div>
    <v-row dense>
      <v-col cols="1" class="th">
        ハードル
      </v-col>
      <v-col cols="11">
        <v-row dense>
          <v-col cols="4" class="th">
            項目
          </v-col>
          <v-col cols="4" class="th">
            おすすめサイト
          </v-col>
          <v-col cols="4" class="th">
            コメント
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="1">
        ハードル
      </v-col>
      <v-col cols="11">
        <v-row 
          dense
          v-for="(item, i) in categories[$route.params.id - 1].items"
          :key="i"
          class="item-box"
        >
          <v-col cols="4" class="item-name">
            {{ item.name }}
          </v-col>
          <v-col cols="4" class="link-box overflow-y-auto">
            <v-row
              v-for="(link, j) in item.links"
              :key="j"
              class="link"
            >
              <v-col cols="12">
                <a v-bind:href="link.to" target="_blank">{{ link.name }}</a>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" class="comment-box overflow-y-auto">
            <v-row
              v-for="(comment, k) in item.comments"
              :key="k"
              class="comment"
            >
              <v-col cols="12">
                {{ comment.body }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.title h1{
  text-align: center;
  margin-top: 1em;
}
.description {
  margin: 1em;
  padding: 1em;
  background-color: #EEEEEE;
  border-radius: 1rem;
  text-indent: 1em;
}
.item-box {
  border: solid 1px #EF5350;
  border-radius: 0.5rem;
  margin: 0 1em 1em 0;
  padding: 0.7em 0;
}
.item-name {
  text-align: center;
  margin: auto 0;
  font-size: 1.25em;
  font-weight: bold;
  color: #EF5350;
}
.th {
  text-align: center;
}
.link-box {
  max-height: 250px;
}
.link {
  background-color: #E3F2FD;
  border-radius: 0.25rem;;
  margin: 0.5em 0;
}
.comment-box {
  padding: 0.5em;
  max-height: 250px;
}
.comment {
  margin: 0.3em 0;
  background-color: #FFCDD2;
  border-radius: 0.5rem;
}
</style>

<script>
  export default {
    data: () => ({
      categories: [
        {
          id: '1',
          title: 'プログラミング',
          description: 'プログラミングはパズルのようなものなので、いくつかの処理を組み合わせて一つのプログラムを作ることになります。組み合わせ方によって正常に動作しなかったり、実行結果が異なってくるので慎重に考えながら作る必要があります。1つ1つの処理に整合性を取りながら正しく考えることになるので、論理的な思考力が身に付くことになります。',
          items: [
            {
              level: '1',
              name: 'タイピング',
              links: [
                {
                  to: 'http://typingx0.net/sushida/',
                  name: '寿司打'
                }
              ],
              comments: [
                {
                  user: 'ユーザーA',
                  body: '【寿司打】タイピング練習といえばこのゲームでしょう。寿司好きでなくても挑戦したことがあるという方は多いはず。'
                },
                {
                  user: 'ユーザーB',
                  body: '【寿司打】タイピング練習といえばこのゲームでしょう。寿司好きでなくても挑戦したことがあるという方は多いはず。'
                }
              ]
            },
            {
              level: '2',
              name: 'プログラミング基礎',
              links: [
                {
                  to: '#',
                  name: 'progate'
                },
                {
                  to: '#',
                  name: 'ドットインストール'
                }
              ],
              comments: [
                {
                  user: 'ユーザーC',
                  body: 'コメントC'
                },
                {
                  user: 'ユーザーD',
                  body: 'コメントD'
                }
              ]
            },
            {
              level: '3',
              name: '言語を決める',
              links: [
                {
                  to: '#',
                  name: '目的から決める'
                },
                {
                  to: '#',
                  name: '案件から決める'
                }
              ],
              comments: [
                {
                  user: 'ユーザーE',
                  body: 'コメントE'
                },
                {
                  user: 'ユーザーF',
                  body: 'コメントF'
                }
              ]
            },
          ]
        },
        {
          id: '2',
          title: 'IT',
          description: 'ITはコンピュータやインターネットだけでなく、セキュリティ・情報処理も含む広い意味で使われます。基本的なIT用語の理解は、ITを活用する上でとても役立ちます。',
          items: [
            {
              level: '1',
              name: 'ITとは何か知る',
              links: [
                {
                  to: '#',
                  name: 'ITとは'
                }
              ],
              comments: [
                {
                  user: 'ユーザーG',
                  body: 'コメントG'
                },
                {
                  user: 'ユーザーH',
                  body: 'コメントH'
                }
              ]
            },
            {
              level: '2',
              name: 'ITパスポート試験',
              links: [
                {
                  to: '#',
                  name: 'ITパスポート試験'
                }
              ],
              comments: [
                {
                  user: 'ユーザーI',
                  body: 'コメントI'
                },
                {
                  user: 'ユーザーJ',
                  body: 'コメントJ'
                }
              ]
            },
            {
              level: '3',
              name: '基本情報技術者になる',
              links: [
                {
                  to: '#',
                  name: '基本情報技術者試験'
                }
              ],
              comments: [
                {
                  user: 'ユーザーK',
                  body: 'コメントK'
                },
                {
                  user: 'ユーザーL',
                  body: 'コメントL'
                }
              ]
            },
            {
              level: '4',
              name: '応用情報技術者になる',
              links: [
                {
                  to: '#',
                  name: '応用情報技術者試験'
                }
              ],
              comments: [
                {
                  user: 'ユーザーM',
                  body: 'コメントM'
                },
                {
                  user: 'ユーザーN',
                  body: 'コメントN'
                }
              ]
            },
          ]
        },
      ],
    }),
  }
</script>