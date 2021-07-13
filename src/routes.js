import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'top',
            component: () => import('./views/Top.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/page/:id',
            name: 'page',
            component: () => import('./views/Page.vue')
        },
    ]
})