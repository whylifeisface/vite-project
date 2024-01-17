import axios from "axios";


const request = axios.create({
    baseURL: "",
    timeout: 5000,
})

request.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        return config;
    },
    (error) =>
    {
    // Do something with request error
     
    return Promise.reject(error);
    }
)   

request.interceptors.response.use(
    (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        //
        // Do something with response data
        return response.data;
    },
    (error) => {   
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        //
        // Do something with response error
        let status = error.response.status;
        switch(status) {
            case 401:
                console.log("401");
                break;
            case 404:
                console.log("404");
                break;
            // else: 
            //     console.log("其他错误");
                
        }

        return Promise.reject(error);
    }
)
export default request; 
//服务器地址:http://syt.atguigu.cn

// 医院接口1 http://139.198.34.216:8201/swagger-ui.html

// 公共数据接口:http://139.198.34.216:8202/swagger-ui.html 会员接口:http://139.198.34.216:8203/swagger-ui.html

// 短信验证码接口: http://139.198.34.216:8204/swagger-ui.html 订单接口:http://139.198.34.216:8206/swagger-ui.html

// 文件上传接口:http://139.198.34.216:8205/swagger-ui.html 后台用户接口:http://139.198.34.216:8212/swagger-ui.html


