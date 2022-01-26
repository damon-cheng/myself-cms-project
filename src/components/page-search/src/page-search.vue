<template>
  <div>
    <!-- <LD-form v-bind="searchFormConfig" :formData="formData" /> -->
    <LD-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh" @click="handleResetClick"
            >重置</el-button
          >
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handlerQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </LD-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import LDForm from "@/base-ui/form"

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    LDForm
  },
  emits: ["resetBtnClick", "queryBtnClick"],
  setup(props, { emit }) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ""
    }
    const formData = ref(formOriginData)
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
      emit("resetBtnClick")
    }

    const handlerQueryClick = () => {
      emit("queryBtnClick", formData.value)
    }
    return {
      formData,
      handleResetClick,
      handlerQueryClick
    }
  }
})
</script>

<style scoped></style>
