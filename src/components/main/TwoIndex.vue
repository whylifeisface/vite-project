<template>
<div>
    <div class="flex flex-wrap w-full">
        <div v-for="item in store.items" :id="item.id" class="pa-2">
            <ACard>
                <template #default>
                    <div class=" w-sm">
                        <div class="a-title center">
                            <span>{{ item.hosname }}</span>
                        </div>
                        <div class="a-subtitle flex justify-around">
                            <span>
                                <i class="i-mdi-light:thumb-up"></i>
                                {{ item.param.hostypeString }}
                            </span>
                            <!-- <span class="i-mdi-light:thumb-up">

                            </span> -->
                            <span>
                                <i class="i-mdi-light:alarm"></i>
                                {{ item.updateTime }}
                            </span>
                            <!-- <span >
                            </span> -->
                        </div>
                        <img src="" alt="" srcset="">
                    </div>
                </template>
            </ACard>
        </div>

    </div>
    <div class="flex justify-between">
        <!-- pagination -->
        <div>
            <span>1 - 5 of 10</span>    
        </div>
        <div>
            <span>per page <ABtn class="m3">10 <AMenu>
                        <AList class="" :items="page.pageSizeList" v-model="page.page_size"></AList>
                    </AMenu>
                </ABtn></span>
            <span class="m3">
                <div class="i-mdi-light:arrow-left hover-color-amber:hover" @click="pageMinus"></div>
                <div class="i-mdi-light:arrow-right hover-color-amber:hover" @click="pageAdd"></div>
            </span>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { mainStoreService } from '@/store/main/mainStore'
const store = mainStoreService()



function pageMinus() {
    page.value.page_num = page.value.page_num - 1

    getPage()
}

function pageAdd() {
    // console.log(page.value.page_num);
    console.log(page.value.page_num);

    // if (page.value.page_num < page.value.totalPages) {
    page.value.page_num = page.value.page_num + 1
    console.log(page.value.page_num);

    // } else { 
    //     page.value.page_num = 1
    // }
    // page.value.page_num < page.value.totalPages ? page.value.page_num++ : page.value.page_num
    console.log(page.value.page_num);

    getPage()
}
const page = ref({
    totalPages: 10,
    page_num: 1,
    page_size: 10,
    pageSizeList: [10, 20, 30, 40, 50]
})
// const items = store.items

function getPage() {
    const { page_num, page_size } = page.value
    store.getMain(page_num, page_size)
    // getHostipalList(page_num, page_size).then((res) => {
    //     // if (res.status == 200) {
    //     console.log(res);
    //     items.value = res.data.content
    //     page.value.totalPages = res.data.totalPages
    //     console.log(items);
    //     // }
    // })
}
onMounted(() => {
    getPage()
})

// const items = ref<any>([])
</script>

<style scoped>

</style>
