import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import Home from '/src/pages/Home.vue';
import NotFound from '/src/pages/NotFound.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    { path: '/*', redirect: '/home' },
    {
        path: '/:catchAll(.*)',
        component: NotFound,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
