<template>
  <div class="line-echart">
    <base-echart :options="lineOptions"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue"
import BaseEchart from "@/base-ui/echart"
import { IDataType } from "@/services/types"

const props = defineProps<{
  title: string
  xLabels: string[]
  values: any[]
}>()

const lineOptions = computed(() => {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: props.xLabels
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "分类销量统计",
        type: "line",
        stack: "总量",
        areaStyle: {},
        emphasis: {
          focus: "series"
        },
        data: props.values
      }
    ]
  }
})
</script>

<style lang="scss" scoped></style>
