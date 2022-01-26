import { createApp } from "vue"

//import ElementPlus from "element-plus"
//import "element-plus/dist/index.css"
import { globalRegister } from "@/global"
//import "./services/axios_demo"
import "normalize.css"
import "./assets/css/index.less"

// import ldRquest from "./services"

import App from "./App.vue"
import router from "./router"
import store from "./store"
import { setupStore } from "@/store"

const app = createApp(App)
setupStore()
app.use(router)
app.use(store)
app.use(globalRegister)
//globalRegister(app)
//app.use(ElementPlus)
// import ElementPlus from "element-plus"
// import zhCn from "element-plus/es/locale/lang/zh-cn"

// app.use(ElementPlus, {
//   locale: zhCn
// })

app.mount("#app")

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// ldRquest
//   .get<DataType>({
//     url: "/home/multidata",
//     //method: "GET",
//     showLoding: true,
//     interceptors: {
//       requestInterceptor(config) {
//         console.log("request的拦截器")
//         return config
//       },
//       responseInterceptor(res) {
//         console.log("response拦截器")
//         return res
//       }
//       // requestInterceptor: (config) => {
//       //   console.log("request的拦截器")
//       //   return config
//       // },
//       // responseInterceptor: (res) => {
//       //   console.log("response拦截器")
//       //   return res
//       // }
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res)
//   })

// ldRquest.request({
//   url: "/home/multidata",
//   method: "GET"
// })
