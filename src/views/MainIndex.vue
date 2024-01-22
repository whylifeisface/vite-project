<template>
<div>

    <div class="main_title">

        <div>title</div>

        <div class="a-subtitle">

            <span style="margin-right: 10px;">帮助中心</span>

            <span>登录/注册</span>

        </div>

    </div>
    <router-view></router-view>
    <main class="main">

        <div class="center">

            <CarouselIndx></CarouselIndx>
            <SearchIndex></SearchIndex>
            <div class=" flex ">
                <div class="left w50">
                <section class="left h-full">
                        <LeftIndex></LeftIndex>

                </section>
            </div>
                <div class="w280">
                    <LevelIndex></LevelIndex>
                    <regionIndex></regionIndex>
                    <TwoIndex></TwoIndex>
                </div>

                <div class="w50 mt-10">
                    <div>
                        <!-- <div class="flex justify-between">
                            <span><i class=""></i> 常见科室</span>
                            <span>全部 <i class=""></i> </span>
                        </div>
                        <div class="flex flex-wrap">
                            <span class="p1" v-for="(item, index) in values" :key="index">{{ item.title }}</span>
                        </div>
                        <div></div> -->
                        <title-index title="常见科室">
                            <template #content>
                                <div class="flex flex-wrap">
                                    <span class="p1" v-for="(item, index) in values" :key="index">{{ item.title }}</span>
                                </div>  
                            </template>
                        </title-index>
                        <title-index title="平台公告">
                            <template #content>
                                <div class="flex flex-wrap">
                                    <span class="p1" v-for="(item, index) in newList" :key="index">{{ item.news }}</span>
                                </div>  
                            </template>
                        </title-index>
                    </div>

                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="right">

        </div>
        <!-- <router-view></router-view> -->
    </main>
    <section class="right">

    </section>

    <div class="bottom">

        <div class="content">

            <div class="left">

                京ICP备12345678号 电话挂号010-56253824

            </div>

            <div class="right">

                <span class="item">联系我们</span>

                <span class="item">合作伙伴</span>

                <span class="item">用户协议</span>

                <span class="item">隐私协议</span>

            </div>

        </div>

    </div>

</div>
</template>

<script lang="ts" setup>
import SearchIndex from '@/components/main/SearchIndex.vue';
import CarouselIndx from '@/components/main/carouselIndx.vue';
import LevelIndex from '@/components/main/LevelIndex.vue';
import regionIndex from '@/components/main/RegionIndex.vue';
import TwoIndex from '@/components/main/TwoIndex.vue';
import titleIndex from '@/components/main/TitleIndex.vue';

import { ref } from 'vue'
import LeftIndex from '@/components/main/leftIndex.vue';

const values = ref([
    { title: '内科', id: 1 },
    { title: '神经内科', id: 2 },
    { title: '妇科', id: 3 },
    { title: '儿科', id: 4 },
    { title: '消化内科', id: 5 },
    { title: '呼吸内科', id: 6 },
    { title: '耳鼻咽喉科', id: 8 },
])

const newList = ref([
    { news: '关于延长北京大学', id: 1},
    { news: '关于延长北京大学', id: 1},
    { news: '关于延长北京大学', id: 1},


])
</script>

<style scoped>
.main_title {
    display: flex;
    justify-content: space-between;
    width: 1000px;
    height: 70px;
}

.bottom {
    width: 100%;
    height: 50px;

    .content {
        display: flex;
        justify-content: space-between;
    }

    .left {}

    .right {
        width: 200PX;

        .item {
            margin-right: 10px;
        }
    }

    /* background: ; */
}
</style>
