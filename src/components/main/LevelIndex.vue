<template>
        <div>
            <div class="title a-title">
                医院
            </div>
            <div class="level flex ">
                等级: 
                <div @click="changeLevel(0, -1)" class="ml-4 hover-color-lightblue:hover" :class="{'c-lightblue': -1 == store.region }" >
                    全部
                </div>
                <div v-for="(level, index) in levelList" :key="level.id" class="ml-4 hover-color-lightblue:hover" 
                :class="{'c-lightblue': index == store.level}"
                @click="changeLevel(index + 1, index)"
                >
                    {{ level.name }}
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
import { getHostipalByDictcode } from '@/api/home';
import {  HospitalLevelAndRegionList } from '@/api/home/type';
import { onMounted, ref } from 'vue'
import { mainStoreService } from '@/store/main/mainStore'

const store = mainStoreService()

// const activeIndex = store.level


const getLevel = async () => {
   let result = await getHostipalByDictcode("HosType")
   levelList.value = result.data
   console.log(result);
}
onMounted(() => {
    getLevel()
})
const changeLevel = (levelId: number, index: number) => {
    store.setLevel(index)
    // activeIndex = index
    // console.log(activeIndex.value);
    console.log(levelId);

    store.getMain(1, 10, levelId)
}
const levelList = ref<HospitalLevelAndRegionList | []>([])

// const levels = ref([
//     {
//         title: "全部",
//         id: "0"
//     },
//     {
//         title: "三级甲等",
//         id: "1"
//     },
//     {
//         title: "三级乙等",
//         id: "2"
//     },
//     {
//         title: "二级甲等",
//         id: "3"
//     },
//     {
//         title: "二级乙等",
//         id: "4"
//     },
//     {
//         title: "一级",
//         id: "5"
//     },
// ])

</script>

<style scoped>

</style>