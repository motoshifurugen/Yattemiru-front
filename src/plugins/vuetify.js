// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)
Vue.use(VueRouter)

const opts = {
  icons: {
    iconfont: 'mdi'
  },
}

export default new Vuetify(opts)