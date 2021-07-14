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
                },
                {
                  to: 'https://www.e-typing.ne.jp/',
                  name: 'e-typing'
                },
                {
                  to: 'https://pokedebi.com/game/momotype/',
                  name: '桃太郎たいぴんぐ'
                }
              ],
              comments: [
                {
                  user: 'ユーザーA',
                  body: '【寿司打】タイピング練習といえばこのゲームでしょう。寿司好きでなくても挑戦したことがあるという方は多いはず。'
                },
                {
                  user: 'ユーザーB',
                  body: '【桃太郎たいぴんぐ】RPG感覚でタイピング練習ができる！楽しい！'
                },
                {
                  user: 'ユーザーB',
                  body: '【e-typing】やったぜ！3ヶ月続けて初めてスコアがAに行きました。こんなことに3ヶ月かけてよかったのかw'
                },
                {
                  user: 'ユーザーA',
                  body: '【寿司打】タイピング練習といえばこのゲームでしょう。寿司好きでなくても挑戦したことがあるという方は多いはず。'
                },
                {
                  user: 'ユーザーB',
                  body: '【桃太郎たいぴんぐ】RPG感覚でタイピング練習ができる！楽しい！'
                },
                {
                  user: 'ユーザーB',
                  body: '【e-typing】やったぜ！3ヶ月続けて初めてスコアがAに行きました。こんなことに3ヶ月かけてよかったのかw'
                }
              ]
            },
            {
              level: '2',
              name: 'プログラミング基礎',
              links: [
                {
                  to: 'https://prog-8.com/',
                  name: 'progate'
                },
                {
                  to: 'https://dotinstall.com/',
                  name: 'ドットインストール'
                }
              ],
              comments: [
                {
                  user: 'ユーザーC',
                  body: '【Progate】私もプロゲートで始めました。可愛くてはまります。'
                },
                {
                  user: 'ユーザーD',
                  body: '【ドットインストール】お世話になっています。動画がいいんだよなー。パソコン触れない時も音声で学習できる。'
                },
                {
                  user: 'ユーザーC',
                  body: '【Progate】私もプロゲートで始めました。可愛くてはまります。'
                },
                {
                  user: 'ユーザーD',
                  body: '【ドットインストール】お世話になっています。動画がいいんだよなー。パソコン触れない時も音声で学習できる。'
                }
              ]
            },
            {
              level: '3',
              name: '作りたいものを決める',
              links: [
                {
                  to: 'https://qiita.com/tags/todo',
                  name: '【Qiita】ToDoアプリ作成の記事一覧'
                },
                {
                  to: 'https://qiita.com/tags/%e5%80%8b%e4%ba%ba%e9%96%8b%e7%99%ba',
                  name: '【Qiita】個人開発の記事一覧'
                }
              ],
              comments: [
                {
                  user: 'ユーザーE',
                  body: 'SNS投稿アプリとかも結構簡単に作れる。'
                },
                {
                  user: 'ユーザーF',
                  body: '何を作りたいかが決まらず、どの言語を勉強しようか迷っています。'
                },
                {
                  user: 'ユーザーE',
                  body: 'SNS投稿アプリとかも結構簡単に作れる。'
                },
                {
                  user: 'ユーザーF',
                  body: '何を作りたいかが決まらず、どの言語を勉強しようか迷っています。'
                }
              ]
            },
            {
              level: '4',
              name: 'アウトプットする',
              links: [
                {
                  to: 'https://talent.supporterz.jp/geekcamp/2021/',
                  name: '技育CAMPハッカソン'
                },
                {
                  to: 'https://github.co.jp/',
                  name: 'Github'
                }
              ],
              comments: [
                {
                  user: 'ユーザーE',
                  body: '【技育CAMPハッカソン】友達と参加しました。私はスキルが全然なのでおんぶに抱っこ状態でしたが、色々勉強になりました。これからも頑張ろうと思います。'
                },
                {
                  user: 'ユーザーF',
                  body: 'アウトプットは難しいけど大事なのかも。Qiitaで記事を投稿できるようになりたい！'
                },
                {
                  user: 'ユーザーE',
                  body: '【技育CAMPハッカソン】友達と参加しました。私はスキルが全然なのでおんぶに抱っこ状態でしたが、色々勉強になりました。これからも頑張ろうと思います。'
                },
                {
                  user: 'ユーザーF',
                  body: 'アウトプットは難しいけど大事なのかも。Qiitaで記事を投稿できるようになりたい！'
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
                  to: 'https://ja.wikipedia.org/wiki/%E6%83%85%E5%A0%B1%E6%8A%80%E8%A1%93',
                  name: '【Wikipedia】IT'
                }
              ],
              comments: [
              ]
            },
            {
              level: '2',
              name: 'ITパスポート試験',
              links: [
                {
                  to: 'https://www3.jitec.ipa.go.jp/JitesCbt/index.html',
                  name: 'ITパスポート試験'
                }
              ],
              comments: [
                {
                  user: 'ユーザーI',
                  body: '【ITパスポート】IT系に就職しなくても勉強して損はないと思うので、受けてよかったなと思います。'
                },
                {
                  user: 'ユーザーJ',
                  body: '【ITパスポート】時間が空いたんで、ITパスポートの勉強するぞー！キタミ式参考書を買って夏の試験に向けて頑張る'
                }
              ]
            },
            {
              level: '3',
              name: '基本情報技術者になる',
              links: [
                {
                  to: 'https://www.jitec.ipa.go.jp/',
                  name: '基本情報技術者試験'
                },
                {
                  to: 'https://www.fe-siken.com/',
                  name: '基本情報技術者試験ドットコム'
                },
              ],
              comments: [
                {
                  user: 'ユーザーK',
                  body: '【基本情報技術者試験ドットコム】参考書買って挫折したけど、このサイトのおかげで再挑戦できそう・・・'
                },
                {
                  user: 'ユーザーL',
                  body: '【基本情報技術者試験】合格率が30%くらいって聞いたから、頑張って合格して自信つけたい！過去問では合格ラインいってるー。'
                },
                {
                  user: 'ユーザーK',
                  body: '【基本情報技術者試験ドットコム】参考書買って挫折したけど、このサイトのおかげで再挑戦できそう・・・'
                },
                {
                  user: 'ユーザーL',
                  body: '【基本情報技術者試験】合格率が30%くらいって聞いたから、頑張って合格して自信つけたい！過去問では合格ラインいってるー。'
                }
              ]
            },
            {
              level: '4',
              name: '応用情報技術者になる',
              links: [
                {
                  to: 'https://www.jitec.ipa.go.jp/1_11seido/ap.html',
                  name: '応用情報技術者試験'
                },
                {
                  to: 'https://www.ap-siken.com/',
                  name: '応用情報技術者試験ドットコム'
                }
              ],
              comments: [
                {
                  user: 'ユーザーM',
                  body: '応用って独学でいけるんかな？'
                },
              ]
            },
          ]
        },
      ],
    }),
  }
</script>