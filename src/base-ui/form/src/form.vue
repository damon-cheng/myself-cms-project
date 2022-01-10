<template>
  <div class="ld-form">
    <el-form :label-width="labelWidth"
      ><el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template v-if="item.type == 'input' || item.type == 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type == 'password'"
                  v-bind="item.otherOptions"
                ></el-input>
              </template>
              <template v-else-if="item.type == 'select'">
                <el-select
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type == 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template> </el-row
    ></el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { IFormItem } from "../types"

export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: "100px"
    },
    itemStyle: {
      type: Object,
      default: () => ({
        padding: "10px 40px"
      })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 12,
        sx: 24
      })
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.ld-form {
  padding-top: 22px;
}
</style>
