import axios from "axios"

axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
  console.log(res.data)
})

axios.defaults.baseURL = "http://httpbin.org"
axios.defaults.timeout = 10000

axios
  .get("/get", {
    params: {
      name: "damon"
    },
    timeout: 5000,
    headers: {}
  })
  .then((res) => {
    console.log("data:", res.data)
  })

axios
  .post("/post", {
    data: {
      name: "messi"
    }
  })
  .then((res) => {
    console.log("post:", res.data)
  })

axios.interceptors.request.use(
  (config) => {
    console.log("请求成功拦截")
  },
  (err) => {
    console.log("请求发送错误")
    return err
  }
)

axios.interceptors.response.use(
  (res) => {
    console.log("响应成功的拦截")
    return res
  },
  (err) => {
    console.log("服务器响应失败")
    return err
  }
)
