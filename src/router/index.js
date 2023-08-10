import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/topo' },
        { path: '/topo', component: () => import('@/views/topo.vue') }
    ]
})

export default router