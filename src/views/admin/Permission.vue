<template>
    <section>
        <div class="operater-container">
            <el-row fill="true">
                <el-button type="primary" @click="onSubmit">新增</el-button>
            </el-row>
        </div>
        <el-row>
            <el-table :data="tableData1" style="width: 100%" row-key="id" border lazy :load="load"
                :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
                <el-table-column prop="date" label="Date" />
                <el-table-column prop="name" label="Name" />
                <el-table-column label="Operations">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
    </section>
</template>
<script setup>
import { reactive } from 'vue'

const load = (
    row,
    treeNode,
    resolve
) => {
    setTimeout(() => {
        resolve([
            {
                id: 31,
                date: '2016-05-01',
                name: 'wangxiaohu',
            },
            {
                id: 32,
                date: '2016-05-01',
                name: 'wangxiaohu',
            },
        ])
    }, 1000)
}

const tableData1 = [
    {
        id: 1,
        date: '2016-05-02',
        name: 'wangxiaohu',
    },
    {
        id: 2,
        date: '2016-05-04',
        name: 'wangxiaohu',
    },
    {
        id: 3,
        date: '2016-05-01',
        name: 'wangxiaohu',
        hasChildren: true,
    },
    {
        id: 4,
        date: '2016-05-03',
        name: 'wangxiaohu',
    },
]
</script>

<style scoped>
.operater-container {
    margin-bottom: 15px;
}
</style>