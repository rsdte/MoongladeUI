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
            }
        ]
    }
]

export default routes;