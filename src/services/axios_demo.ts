import axios from "axios"

axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
  console.log(res.data)
})

// axios.defaults.baseURL = "http://httpbin.org"
// axios.defaults.timeout = 10000
