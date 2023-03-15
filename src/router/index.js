import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'Home',
            component: () => import('../Pages/HomeCounter')
        },
        {
            path:'/counter',
            name:'Counter',
            component: () => import('../Pages/MainCounter')
        },
        {
            path:'/:catchAll(.*)',
            name:'NotFound',
            component: () => import('../Pages/NotFound')
        }
    ]
})

export default router