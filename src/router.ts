import Vue from 'vue';
import VueRouter from 'vue-router';
import Base from './views/Base.vue';
import Auth from './views/Auth.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/auth',
        name: 'auth',
        component: Auth,
    },
    {
        path: '/',
        name: 'base',
        component: Base,
        redirect: { name: 'dashboard' },
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: () => import("./components/Dashboard.vue"),
            },
        ]
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
