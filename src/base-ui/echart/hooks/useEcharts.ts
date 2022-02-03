import * as echarts from "echarts"

import ChinaMapData from "../data/china.json"

echarts.registerMap("china", ChinaMapData)

export default function (domEl: HTMLElement, theme = "light") {
  const echartsInstance = echarts.init(domEl, theme, { renderer: "svg" })
  const setOptions = (options: echarts.EChartsCoreOption) => {
    echartsInstance.setOption(options)
  }

  window.addEventListener("resize", () => {
    echartsInstance.resize()
  })

  return {
    setOptions
  }
}
