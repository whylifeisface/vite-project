<template>
    <div class=" flex flex-col border-r-4">
        <div v-for="(item, index) in values" 
        :key="index"
        class="h8 w20 hover-bg-blue pb-2"
        @click="router.push(item.router)"
        >
            {{ item.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const values = ref([

{name: "医院信息", router: ""}, {name: "预约挂号", router: ""}, 
{name: "医院详情", router: ""}, {name: "预约通知", router: ""}, 
{name: "停诊信息", router: ""}, {name: "查询取消", router: ""}
])

</script>

<style scoped>

</style>