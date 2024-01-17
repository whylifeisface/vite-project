<template>
<div>

    <div class="main_title">

        <div>title</div>

        <div class="a-subtitle">

            <span style="margin-right: 10px;">帮助中心</span>

            <span>登录/注册</span>

        </div>

    </div>

    <section class="left">

    </section>

    <main class="main">
        <CarouselIndx></CarouselIndx>
        <SearchIndex></SearchIndex>
        <LevelIndex></LevelIndex>
        <regionIndex></regionIndex>
        <TwoIndex></TwoIndex>
        
        <!-- <router-view></router-view> -->

    </main>

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




</script>

<style scoped>

.main_title {
    display: flex;
    justify-content: space-between;
    width: 1200px;
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
        .item {
            margin-right: 10px;
        }
    }

    /* background: ; */
}
</style>
