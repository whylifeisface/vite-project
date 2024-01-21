<template>
<div>
    <div>
        <div class="flex justify-between">
            <span><i class=""></i> {{ props?.title }}</span>
            <span>全部 <i class=""></i> </span>
        </div>
        <slot name="content"></slot>
        <!-- <div class="flex flex-wrap">
            <span class="p1" v-for="(item, index) in values" :key="index">{{ item.title }}</span>
        </div> -->
        <div></div>
    </div>
</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps(["title"])
</script>

<style scoped>

</style>
