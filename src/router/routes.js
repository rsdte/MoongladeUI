const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/admin',
        component: () => import('../views/admin/Home.vue'),
        children: [
            {
                path: 'dashboard',
                component: () => import('../views/admin/Dashboard.vue')
            },
            {
                path: '',
                redirect: '/admin/dashboard'
            },
            {
                path: 'user',
                component: () => import('../views/admin/User.vue')
            },
            {
                path: 'role',
                component: () => import('../views/admin/Role.vue')
            },
            {
                path: 'permission',
                component: () => import('../views/admin/Permission.vue')
            }
        ]
    }
]

export default routes;