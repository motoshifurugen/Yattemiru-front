<template>
  <div class="home">
    <div class="category">
      <v-row dense>
        <v-col
          v-for="(category, c) in categories"
          :key="c"
          cols="12"
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
                text
                :to="item.link"
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
}
</style>

<script>
  export default {
    data: () => ({
      categories: [
        {
          title: '最近流行りの...',
          buttons: [
            {
              id: '1',
              name: 'プログラミング',
              link: '/page/1'
            },
            {
              id: '2',
              name: 'IT',
              link: '/page/2'
            },
            {
              id: '3',
              name: 'Youtube'
            }
          ]
        },
        {
          title: '学問を気軽に！',
          buttons: [
            {
              id: '4',
              name: '英語'
            },
            {
              id: '5',
              name: '心理学'
            },
            {
              id: '6',
              name: '物理'
            }
          ]
        },
        {
          title: '趣味で充実',
          buttons: [
            {
              id: '7',
              name: '読書'
            },
            {
              id: '8',
              name: 'ギター'
            },
            {
              id: '9',
              name: 'カメラ'
            }
          ]
        },
      ],
    }),
  }
</script>
