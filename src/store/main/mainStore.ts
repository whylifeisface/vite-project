import { getHostipalList, getHostipalSearchKey } from "@/api/home";
import { defineStore } from "pinia";
import { ref } from "vue";

export const mainStoreService = defineStore("mainIndex", () => {

    const level = ref<number | "">("")

    const setLevel = (index: number) => {
        level.value = index
    }

    const region = ref<number | "">("")

    const setRegion = (index: number) => {
        region.value = index
    }

    const getSearchResult = async (searchKey: string) => {
        const result = await getHostipalSearchKey(searchKey);
        items.value = result.data
        console.log(result);
    }

    const items = ref<any>([])
    const getMain = async (page_num: number = 1, page_size: number = 10, level: number | "" = "", region: number | "" = "") => {
        // if (level.value = "" && level == "") {
        // }
        // level.value = level
        // region.value = region

        if (level == "" && region == "") {
          const result = await getHostipalList(page_num, page_size);
            items.value = result.data.content
        } else {
            const result = await getHostipalList(page_num, page_size, level, region);
            items.value = result.data.content
        }

    }

    return  { getMain, items, level, region, setLevel, setRegion, getSearchResult }


});