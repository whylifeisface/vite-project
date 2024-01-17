<template>
    <div class="w-full flex justify-center ">
        <!-- 居中盒子 -->
        <div class="flex sm:w-96 items-center">
                <AInput class="w-full mt-6" type="email" placeholder="Enter your email" v-model="searchKey" />
                <ABtn class="mt-6" variant="solid" color="primary" icon="i-bx-star" @click="searchByKey"></ABtn>
            </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { mainStoreService } from '@/store/main/mainStore'


document.addEventListener("keydown", function (e){
    if (e.keyCode === 13) {
        searchByKey()
    }
})
const store = mainStoreService()
const searchKey = ref('hello')

const searchByKey = async () => {

    store.getSearchResult(searchKey.value)
    
}
</script>

<style scoped>

</style>