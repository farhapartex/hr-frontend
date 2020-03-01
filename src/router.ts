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
            {
                path: "profile",
                name: "profile",
                redirect: { name: 'profileView' },
                component: () => import("./components/profile/Profile.vue"),
                children: [
                    {
                        path: "view",
                        name: "profileView",
                        component: () => import("./components/profile/ProfileView.vue"),
                    },
                ]
            },
            {
                path: "access-group",
                name: "accessGroup",
                redirect: { name: 'groupList' },
                component: () => import("./components/AccessGroup.vue"),
                children: [
                    {
                        path: "group-list",
                        name: "groupList",
                        component: () => import("./components/DataTable.vue"),
                    },
                    {
                        path: "new-group",
                        name: "newGroup",
                        component: () => import("./components/Form.vue"),
                    },
                    {
                        path: "group-detail",
                        name: "editGroup",
                        component: () => import("./components/Form.vue"),
                    },
                ]
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
