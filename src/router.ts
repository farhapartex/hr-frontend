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
        meta: {
            visitorRequired: true,
        }
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
                meta: {
                    authRequired: true,
                    access_level: 0
                },
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
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                    {
                        path: "edit",
                        name: "profileEdit",
                        component: () => import("./components/forms/Form.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
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
                        path: "list",
                        name: "groupList",
                        component: () => import("./components/tables/DataTable.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                    {
                        path: "create",
                        name: "newGroup",
                        component: () => import("./components/forms/Form.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                    {
                        path: ":id/detail",
                        name: "editGroup",
                        component: () => import("./components/forms/Form.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                ]
            },
            {
                path: "designation",
                name: "designation",
                redirect: { name: 'designationList' },
                component: () => import("./components/Designation.vue"),
                children: [
                    {
                        path: "list",
                        name: "designationList",
                        component: () => import("./components/tables/DataTable.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                    {
                        path: "create",
                        name: "newDesignation",
                        component: () => import("./components/forms/Form.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                    {
                        path: "detail",
                        name: "editDesignation",
                        component: () => import("./components/forms/Form.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                ]
            },
            {
                path: "users",
                name: "users",
                redirect: { name: 'userList' },
                component: () => import("./components/system-user/User.vue"),
                children: [
                    {
                        path: "list",
                        name: "userList",
                        component: () => import("./components/tables/DataTable.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                    {
                        path: "create",
                        name: "userCreate",
                        component: () => import("./components/forms/Form.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                ]
            },
            {
                path: "employee",
                name: "employee",
                redirect: { name: 'employeeList' },
                component: () => import("./components/employee/Employee.vue"),
                children: [
                    {
                        path: "list",
                        name: "employeeList",
                        component: () => import("./components/tables/DataTable.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                    {
                        path: "create",
                        name: "employeeCreate",
                        component: () => import("./components/forms/Form.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                    {
                        path: "detail",
                        name: "employeeDetail",
                        component: () => import("./components/forms/Form.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                ]
            },
            {
                path: "company-profile",
                name: "companyProfile",
                component: () => import("./components/CompanyProfile.vue"),
                meta: {
                    authRequired: true,
                    access_level: 0
                },
            },
            {
                path: "company-branch",
                name: "companyBranch",
                redirect: { name: 'branchList' },
                component: () => import("./components/Branch.vue"),
                children: [
                    {
                        path: "list",
                        name: "branchList",
                        component: () => import("./components/tables/DataTable.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                    {
                        path: "create",
                        name: "branchCreate",
                        component: () => import("./components/forms/Form.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                    {
                        path: "detail",
                        name: "branchDetail",
                        component: () => import("./components/forms/Form.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                ]
            },
            {
                path: "attendance",
                name: "attendance",
                component: () => import("./components/Attendance.vue"),
                meta: {
                    authRequired: true,
                    access_level: 0
                },
            },
            {
                path: "application",
                name: "application",
                component: () => import("./components/Application.vue"),
                children: [
                    {
                        path: "my-list",
                        name: "userApplicationList",
                        component: () => import("./components/tables/DataTable.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                    {
                        path: "create",
                        name: "userApplicationCreate",
                        component: () => import("./components/forms/Form.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                ]
            },
            {
                path: "extrawork",
                name: "extraWork",
                component: () => import("./components/ExtraWork.vue"),
                children: [
                    {
                        path: "list",
                        name: "extraWorkList",
                        component: () => import("./components/tables/DataTable.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
                    },
                    {
                        path: "create",
                        name: "extraWorkCreate",
                        component: () => import("./components/forms/Form.vue"),
                        meta: {
                            authRequired: true,
                            access_level: 0
                        },
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
