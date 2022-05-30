require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter(routes)

import Toaster from 'v-toaster'

import 'v-toaster/dist/v-toaster.css'

Vue.use(Toaster, { timeout: 5000 })

function loggedIn() {
    return localStorage.getItem('token')
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!loggedIn()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (loggedIn()) {
            next({
                path: '/',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
})

const app = new Vue({
    el: '#app',
    router,
});