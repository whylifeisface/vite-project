import * as VueRouter from "vue-router"


const routes = [
    {
      path: '/',
      name: 'home',
      component: import("../views/MainIndex.vue")
    }
  ]

  export const router =  VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
    scrollBehavior(){
        return { 
            top: 0,
            left: 0 
        }
    }
  })

//   export router