<template>
  <div>
    <base-echart :options="pirOptions"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue"
import BaseEchart from "@/base-ui/echart"
import { IDataType } from "../types"
const props = defineProps<{
  pieData: IDataType[]
}>()

const pirOptions = computed(() => ({
  title: {
    text: "Referer of a Website",
    subtext: "Fake Data",
    left: "center"
  },
  tooltip: {
    trigger: "item"
  },
  legend: {
    orient: "vertical",
    left: "left"
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: props.pieData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
}))
</script>

<style scoped></style>
