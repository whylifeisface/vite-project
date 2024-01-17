import request from "@/utils/request/request";
import { HospitalLevelAndRegionResponseData, HospitalResponseData } from "./type";

enum Api {
    HOSTIPAL_URL = "/api/api/hosp/hospital",
    HOSTIPAL_URL_a = "/aps/api/cmn/dict/findByDictCode",
    HOSTIPAL_SEARCH_KEY = "/api/api/hosp/hospital/findByHosname"
}

export function getHostipalList(pageNum: number, pageSize: number, hostype: number | "" = "", districtCode: number | "" = "") {
    return request.get<any, HospitalResponseData>(Api.HOSTIPAL_URL + `/${pageNum}/${pageSize}?hostype=${hostype}&districtCode=${districtCode}`)
}
// export function getHostipalList_(pageNum: number, pageSize: number) {
//     return request.get<any, HospitalResponseData>(Api.HOSTIPAL_URL + `/${pageNum}/${pageSize}`)
// }
export function getHostipalByDictcode(dictcode: string) {
   return request.get<any,HospitalLevelAndRegionResponseData>(Api.HOSTIPAL_URL_a + `/${dictcode}`)
}

export function getHostipalSearchKey(key: string) {
    return request.get<any, HospitalLevelAndRegionResponseData>(Api.HOSTIPAL_SEARCH_KEY + `/${key}`)
}