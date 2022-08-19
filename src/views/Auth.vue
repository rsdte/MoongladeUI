<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
import http from '../api/http'

const router = useRouter();

const loginForm = reactive({
    userName: '',
    password: ''
})

async function login() {
    let resp = await http.post('/Auth/SignIn', {
        UserName: loginForm.userName,
        Password: loginForm.password
    });
    if (resp.code === 200) {
        localStorage.setItem('token', resp.data);
        router.push({ path: '/admin/dashboard' })
        return;
    }
    ElMessage({
        showClose: true,
        message: resp.message,
        type: 'error',
    })
}

</script>

<template>
    <div class="login-container">
        <div class="login-body">
            <el-row :gutter="20">
                <el-col :span="12" :offset="6">
                    <h2 style="text-align:center">Welcome</h2>
                </el-col>
            </el-row>
            <el-form label-width="60px" label-position="right" :form="loginForm">
                <el-form-item label="用户名">
                    <el-input v-model="loginForm.userName" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" autocomplete="off" v-model="loginForm.password" />
                </el-form-item>
            </el-form>
            <el-row :gutter="20">
                <el-col :span="24">
                    <div class="login-submit">
                        <el-button type="primary" @click="login">登录</el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<style scoped>
.login-container {
    background: url("../assets/login-background.jpg");
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-size: 100% 100%;
}

.login-body {
    height: 200px;
    width: 320px;
    margin-top: 10%;
    padding: 10px 20px 20px 20px;
    border: 1px solid lightblue;
    box-shadow: 5px 5px 5px 5px lightblue;
}

.login-body .el-button {
    width: 100%;
}

.login-body .login-submit {
    padding: 5px 5px 5px 5px;
}
</style>