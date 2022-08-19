<script setup>

import { ref } from 'vue'
import { usePermissionStore } from '../../store/permission'

const permissionStore = usePermissionStore();

permissionStore.loadMenus()

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}

</script>

<template>
    <div class="common-layout">
        <el-container style="height:100%">
            <el-header>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <el-container class="title-container">
                            <a href="#" class="title">通用后台管理系统</a>
                        </el-container>
                    </el-col>
                    <el-col :span="16">
                        <div class="grid-content ep-bg-purple" />
                    </el-col>
                    <el-col :span="4">
                        <el-menu background-color="#23262e" text-color="#ffffff" active-text-color="#009688"
                            :default-active="activeIndex" mode="horizontal" :ellipsis="false" @select="handleSelect">
                            <div class="flex-grow" />
                            <el-menu-item index="1">博客首页</el-menu-item>
                            <el-sub-menu index="2">
                                <template #title>
                                    <el-icon :size="size" :color="color">
                                        <Edit />
                                    </el-icon>
                                    Workspace
                                </template>
                                <el-menu-item class="header-menu" index="2-1">个人资料</el-menu-item>
                                <el-menu-item class="header-menu" index="2-2">修改密码</el-menu-item>
                                <el-menu-item class="header-menu" index="2-3">更换皮肤</el-menu-item>
                                <el-menu-item class="header-menu" index="2-4">安全退出</el-menu-item>
                            </el-sub-menu>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-header>
            <el-container style="height:80%">
                <el-aside width="200px">
                    <el-scrollbar>
                        <el-menu :default-openeds="['1', '3']" active-text-color="#ffffff" background-color="#393d49"
                            text-color="#ffffff">
                            <el-sub-menu v-for="(item, index) in permissionStore.menus" :key="item.id" :index="item.id">
                                <template v-if="item.hasChildren" #title>
                                    <el-icon :size="size" :color="color">
                                        <Edit />
                                    </el-icon>
                                    {{ item.displayName }}
                                </template>
                                <el-menu-item v-if="item.hasChildren" v-for="subItem in item.children" :key="item.id"
                                    :index="item.id">{{ subItem.displayName }}
                                </el-menu-item>
                            </el-sub-menu>
                        </el-menu>
                    </el-scrollbar>
                </el-aside>
                <el-container>
                    <el-main>
                        <router-view />
                    </el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
.title {
    font-size: x-large;
    text-align: center;
    margin-top: 15px;
    color: #ffffff;
    text-decoration: none;
}

.flex-grow {
    flex-grow: 1;
}

.common-layout {
    height: 100%;
    background-color: #ffffff;
}

.el-header {
    background-color: #23262e;
}

.el-header>.el-menu {
    width: 100%;
    background-color: #23262e;
}

.el-aside {
    background-color: #393d49;
}

.el-footer {
    background-color: #eeeeee;
}

.el-aside>.el-menu>.is-active {
    background-color: #009688;
}

.header-menu:hover {
    background-color: #009688;
}

.el-menu-item:hover {
    background-color: #009688;
}
</style>
