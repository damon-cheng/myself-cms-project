<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, withDefaults, defineProps, watchEffect } from "vue"
import useEcharts from "../hooks/useEcharts"
import { EChartsOption } from "echarts"

const echartDivRef = ref<HTMLElement>()
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: "100%",
    height: "360px"
  }
)

onMounted(() => {
  const { setOptions } = useEcharts(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped></style>
