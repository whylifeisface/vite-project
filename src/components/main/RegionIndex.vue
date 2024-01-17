<template>
        <div class="level flex ">
                地区: 
                <div @click="changeRegion(-1, 0)" class="ml-4 hover-color-lightblue:hover" :class="{'c-lightblue': -1 == store.region }" >
                    全部
                </div>
                <div v-for="(region, index) in regionList" :key="region.id" class="ml-4 hover-color-lightblue:hover" 
                :class="{'c-lightblue': index == store.region }"
                
                @click="changeRegion(index, region.id)">
                    {{ region.name }}
                </div>
            </div>
</template>

<script setup lang="ts">
import { getHostipalByDictcode } from '@/api/home';
import { HospitalLevelAndRegionList, HospitalLevelAndRegionResponseData } from '@/api/home/type';
import { onMounted, ref } from 'vue'
import { mainStoreService } from '@/store/main/mainStore'

const store = mainStoreService()
const changeRegion = (index:number, regionIndex: number | "") => {
    store.setRegion(index)
    store.getMain(1, 10, "", regionIndex)

}
const getRegion = async () => { 
//     let result = await getHostipalByDictcode("HosType")
//    levelList.value = result.data
//    console.log(result);
    let result: HospitalLevelAndRegionResponseData = await getHostipalByDictcode("beijin")
    console.log(result);
    // regions.value = result.data
    regionList.value = result.data
}
onMounted(() => {
    getRegion()
})
// const activeIndex = ref(0)
const regionList = ref<HospitalLevelAndRegionList | []>([])
// const regions = ref([

// { id: 1, title: '北京' },
//     { id: 2, title: '上海' },
//     { id: 3, title: '广州' },
//     { id: 4, title: '深圳' },
//     { id: 5, title: '杭州' },
//     { id: 6, title: '成都' },
//     { id: 7, title: '武汉' },
// ])

</script>

<style scoped>

</style>