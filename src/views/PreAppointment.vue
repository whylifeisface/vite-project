<template>
    <div>
        <div>
            <span>{{ data.hospital.hosname }}</span>
            <span class="">
                {{ data.hospital.param.hostypeString }}
            </span>
        </div>
        <div class="flex">
            <div class="w50">img</div>
            <div>
                <p>
                    挂号规则

                </p>
                <p>预约周期: {{data.bookingRule.cycle}}  放号时间: {{ data.bookingRule.releaseTime }} 停挂时间: {{data.bookingRule.stopTime}}</p>
                <p>具体地址: {{ data.hospital.param.fullAddress }}</p>
                <p>规划路线: {{ data.hospital.route }}</p>
                <p>退号时间: 就诊前--工作日{{ data.bookingRule.quitTime }}前取消</p>
                <p>
                    医院预约规则: 
                </p>
                <p>
                    {{ data.bookingRule.rule }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import request from '@/utils/request/request';
import { useRoute } from 'vue-router'
const data = ref({} as any)
const route = useRoute()
const init = () => {
    let hoscode =  route.query
    const result = request.get("/api/hosp/hospital/" + hoscode)
    console.log(result);
    
    // result.then(res = > {
    //     console.log(res);
        
    // })
}
onMounted(() => {
    init()
}),

</script>

<style scoped>

</style>