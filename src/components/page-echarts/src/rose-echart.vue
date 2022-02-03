<template>
  <div class="rose-echart">
    <base-echart :options="roseOptions"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue"
import BaseEchart from "@/base-ui/echart"
import { IDataType } from "@/services/types"

const props = defineProps<{
  roseData: IDataType[]
}>()

const roseOptions = computed(() => ({
  legend: {
    top: "bottom"
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: "Nightingale Chart",
      type: "pie",
      radius: [10, 50],
      center: ["50%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 8
      },
      data: props.roseData
    }
  ]
}))
</script>

<style scoped></style>
