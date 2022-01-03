<template>
  <div class="login-phone">
    <el-form label-width="60px" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" show-password></el-input>
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"

export default defineComponent({
  setup() {
    const phone = reactive({
      num: "",
      code: ""
    })

    const rules = {}
    return {
      phone,
      rules
    }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
  width: 100%;
}

.get-code button {
  margin-left: 8px;
}
</style>
