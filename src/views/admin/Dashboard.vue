<template>
    <div>
        <h1>dashboard.</h1>
        <el-button type="primary" v-on:click="BtnClick">按钮.</el-button>
        <h2>{{ CounterStore }}</h2>
        <h2>{{ CounterStore.count }}</h2>
        <h2>{{ CounterStore.doubleCount }}</h2>
    </div>
</template>

<script setup>
import store from "../../store";

const CounterStore = store()

function BtnClick() {
    CounterStore.increment()
}


</script>