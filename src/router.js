import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/vue-page-test/',
            name: 'Main',
            component: () => import('./components/HelloWorld.vue')
        },
        {
            path: '/vue-page-test/sub',
            name: 'Sub',
            component: () => import('./components/Sub.vue')
        }
    ]
});