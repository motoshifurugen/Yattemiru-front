<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="ニックネーム"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'カテゴリーを選択して下さい。']"
      label="カテゴリー"
      required
    ></v-select>

    <v-textarea
      v-model="comment"
      :rules="commentRules"
      label="コメント"
      required
    ></v-textarea>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      リセット
    </v-btn>

    <v-btn
      :disabled="!valid"
      color="#42A5F5"
      class="mr-4 white--text"
      @click="submit"
    >
      投稿する
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'ニックネームを記入してください。',
      ],
      select: null,
      items: [
        '新規カテゴリ',
        'カテゴリーなし',
        'IT（プログラミング・IT）',
        '勉強（英語・物理・数学・教職・心理学・その他学問）',
        '音楽（ピアノ・ギター・歌）',
        '文章（ブログ・作詞・小説投稿・読書）',
        'スポーツ（ボルダリング・サーフィン・筋トレ・ランニング・ボクシング）',
        'ビジネス（起業・投資・自己分析）',
        '趣味（絵画・イラスト・料理・旅行）',
        'エンタメ（Youtube・ゲーム・ミニチュア・漫画・アニメ・映画・Twitter）',
      ],
      comment: '',
      commentRules: [
        v => !!v || 'コメントを記入してください。',
      ],
    }),

    methods: {
      reset () {
        this.$refs.form.reset()
      },
      submit () {
        this.$refs.form.validate()
      }
    },
  }
</script>