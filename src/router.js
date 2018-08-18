import Vue from 'vue'
import VueRouter from 'vue-router'

import Indexs from './components/Index.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

import Message from './components/Message.vue'
import State from './components/State.vue'
import Count from './components/Count.vue'
import System from './components/System.vue'

import Apply from './components/asideRouter/Apply.vue'
import Buy from './components/asideRouter/Buy.vue'
import Deal from './components/asideRouter/Deal.vue'
import OutStore from './components/asideRouter/OutStore.vue'
import Sell from './components/asideRouter/Sell.vue'
import Store from './components/asideRouter/Store.vue'
import Through from './components/asideRouter/Through.vue'
import Transfer from './components/asideRouter/Transfer.vue'
import User from './components/asideRouter/User.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/index',
        redirect: '/index/message',
        component: Indexs,
        children: [
            {
                path: 'message',
                redirect: '/index/message/apply',
                component: Message,
                children: [
                    {
                        path: 'apply',
                        component: Apply
                    },
                    {
                        path: 'buy',
                        component: Buy
                    },
                    {
                        path: 'deal',
                        component: Deal
                    },
                    {
                        path: 'outstore',
                        component: OutStore
                    },
                    {
                        path: 'sell',
                        component: Sell
                    },
                    {
                        path: 'store',
                        component: Store
                    },
                    {
                        path: 'through',
                        component: Through
                    },
                    {
                        path: 'transfer',
                        component: Transfer
                    },
                    {
                        path: 'user',
                        component: User
                    }
                ]
            },
            {
                path: 'state',
                component: State
            },
            {
                path: 'count',
                component: Count
            },
            {
                path: 'system',
                component: System
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router