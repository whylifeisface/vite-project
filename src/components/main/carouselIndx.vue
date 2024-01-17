<template>
    <div>
        <AViews v-model="state" :transition="transition" class="rounded-lg pos">
            <AView value="first">
                <ACard title="First Card" class="shadow-none" text="Bear claw sweet dessert sweet chocolate bar sesame snaps shortbread." />
            </AView>

            <AView value="second">

                <ACard title="Second Card" class="shadow-none" text="Lollipop marzipan cotton candy pie macaroon wafer jelly beans shortbread." />

            </AView>

            <AView value="third">
                <ACard title="Third Card" class="shadow-none" text="Pastry biscuit tart I love gummies wafer oat cake." />
            </AView>


            <div class="flex justify-between items-center mt-6 text-sm">

            <ABtn class="posleft" 
            icon="i-bx-left-arrow-alt" 
            variant="text" @click="handlePrev">
            </ABtn>
            <ABtn class="posright" append-icon="i-bx-right-arrow-alt" variant="text" @click="handleNext">
            </ABtn>
        </div>
        <div class="gap-6">
            <ABtn class="mt-6" variant="solid" color="primary" icon="i-bx-star" ></ABtn>
        </div>
        </AViews>
    </div>
</template>

<script setup lang="ts">
import { useCycleList } from '@vueuse/core'
import { nextTick, ref } from 'vue'

const { state, next, prev } = useCycleList(['first', 'second', 'third'], {
    initialValue: 'first',
})

console.log(state)

const transition = ref('view-next')

const handleNext = () => {
    transition.value = 'view-next'
    nextTick(next)
}

const handlePrev = () => {
    transition.value = 'view-previous'
    nextTick(prev)
}
</script>

<style scoped>

.pos {
    position: relative;
}

.posleft {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}
.posright {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);

}
</style>