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
                    {
                        path: "edit",
                        name: "profileEdit",
                        component: () => import("./components/Form.vue"),
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
                        component: () => import("./components/DataTable.vue"),
                    },
                    {
                        path: "create",
                        name: "newGroup",
                        component: () => import("./components/Form.vue"),
                    },
                    {
                        path: "detail",
                        name: "editGroup",
                        component: () => import("./components/Form.vue"),
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
                        component: () => import("./components/DataTable.vue"),
                    },
                    {
                        path: "create",
                        name: "newDesignation",
                        component: () => import("./components/Form.vue"),
                    },
                    {
                        path: "detail",
                        name: "editDesignation",
                        component: () => import("./components/Form.vue"),
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
                        component: () => import("./components/DataTable.vue"),
                    },
                    {
                        path: "create",
                        name: "userCreate",
                        component: () => import("./components/Form.vue"),
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
                        component: () => import("./components/DataTable.vue"),
                    },
                    {
                        path: "create",
                        name: "employeeCreate",
                        component: () => import("./components/Form.vue"),
                    },
                    {
                        path: "detail",
                        name: "employeeDetail",
                        component: () => import("./components/Form.vue"),
                    },
                ]
            },
            {
                path: "company-profile",
                name: "companyProfile",
                component: () => import("./components/CompanyProfile.vue"),
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
                        component: () => import("./components/DataTable.vue"),
                    },
                    {
                        path: "create",
                        name: "branchCreate",
                        component: () => import("./components/Form.vue"),
                    },
                    {
                        path: "detail",
                        name: "branchDetail",
                        component: () => import("./components/Form.vue"),
                    },
                ]
            },
            {
                path: "attendance",
                name: "attendance",
                component: () => import("./components/Attendance.vue"),
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
