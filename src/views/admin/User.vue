<template>
    <section>
        <el-form :inline="true" :model="searchDto">
            <el-form-item label="用户名称">
                <el-input v-model="searchDto.username" />
            </el-form-item>
            <el-form-item label="账号状态">
                <el-select v-model="searchDto.status" placeholder="选择用户账号状态">
                    <el-option label="启用" value="0" />
                    <el-option label="禁用" value="1" />
                </el-select>
            </el-form-item>
            <el-form-item label="创建时间">
                <el-date-picker v-model="searchDto.dateTime" type="datetimerange" range-separator="To"
                    start-placeholder="开始时间" end-placeholder="结束时间" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSearch">搜索</el-button>
            </el-form-item>
        </el-form>
        <el-row>
            <el-button type="primary" @click="onAdd">新增</el-button>
        </el-row>
        <el-row>
            <el-table offset="4" span="20" :data="tableData" height="600">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
                <el-table-column label="Operations">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <el-pagination background layout="prev, pager, next" :total="50" />
        </el-row>
    </section>
</template>
<script setup>
import { reactive } from 'vue'
import { useUserStore } from '../../store/users';

const userStore = useUserStore();
const searchDto = reactive({
    username: '',
    status: '启用',
    dateTime: [
        new Date(2000, 10, 10, 10, 10),
        new Date(2000, 10, 11, 10, 10),
    ]
});

async function loadUsers(index, size = 15) {
    let status = searchDto.status === '启用' ? 0 : 1;
    let startTime = searchDto.dateTime[0];
    let endTime = searchDto.dateTime[1];
    await userStore.getUsers(searchDto.username, status, startTime, endTime, index, size);
}

loadUsers(1)

async function onSearch() {
    await loadUsers(1);
}


const onAdd = function () {
    console.log("adddd..........")
}





//await userStore.getUsers(searchDto);

// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-08',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-06',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-07',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]

</script>

<style scoped>
.el-pagination {
    text-align: center;
    margin: 0 auto;
}
</style>