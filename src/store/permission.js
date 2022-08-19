import { defineStore } from 'pinia'

const menus = [
    {
        id: 1,
        displayName: '系统管理',
        hasChildren: true,
        link: '',
        children: [
            {
                id: 2,
                displayName: '用户管理',
                hasChildren: false,
                link: '/admin/user',
                children: null
            },
            {
                id: 3,
                displayName: '角色管理',
                hasChildren: false,
                link: '/admin/role',
                children: null
            },
            {
                id: 4,
                displayName: '权限管理',
                hasChildren: false,
                link: '/admin/permission',
                children: null
            }
        ]
    },
    {
        id: 5,
        displayName: '系统监控',
        hasChildren: true,
        link: '',
        children: [
            {
                id: 6,
                displayName: '操作日志',
                hasChildren: false,
                link: '/admin/user',
                children: null
            },
            {
                id: 7,
                displayName: '异常日志',
                hasChildren: false,
                link: '/admin/role',
                children: null
            }
        ]
    },
    {
        id: 10,
        displayName: '运维管理',
        hasChildren: true,
        link: '',
        children: [
            {
                id: 11,
                displayName: '应用管理',
                hasChildren: false,
                link: '/admin/user',
                children: null
            },
            {
                id: 12,
                displayName: '部署管理',
                hasChildren: false,
                link: '/admin/role',
                children: null
            },
            {
                id: 13,
                displayName: '数据库管理',
                hasChildren: false,
                link: '/admin/role',
                children: null
            }
        ]
    }
]


export const usePermissionStore = defineStore('permission', {
    state: () => {
        return {
            menus: []
        }
    },

    getters: {
    },

    actions: {
        loadMenus() {
            this.menus = menus
        }
    }
})
