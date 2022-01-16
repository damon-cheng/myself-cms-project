<template>
  <div>
    <!-- <LD-form v-bind="searchFormConfig" :formData="formData" /> -->
    <LD-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
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
  setup() {
    const formData = ref({
      name: "",
      password: "",
      sport: ""
    })
    return {
      formData
    }
  }
})
</script>

<style scoped></style>
