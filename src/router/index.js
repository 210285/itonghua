import Vue from 'vue'
import VueRouter from 'vue-router'
import zb from '../components/zb.vue'
import sy from '../components/sy.vue'
import lm from "../components/lm.vue";
import zt from "../components/zt.vue";
import wd from "../components/wd.vue";
Vue.use(VueRouter)



const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/zb',
            component: zb
        },
        {
            path: '/sy',
            component: sy
        }, {
            path: '/lm',
            component: lm
        },
        {
            path: '/zt',
            component: zt
        }, {
            path: '/wd',
            component: wd
        }
    ]
})

export default router