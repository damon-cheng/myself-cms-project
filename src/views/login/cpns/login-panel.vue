<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <!-- <edit style="width: 1em; height: 1em; margin-right: 8px" />
      <share style="width: 1em; height: 1em; margin-right: 8px" />
      <delete style="width: 1em; height: 1em; margin-right: 8px" />
      <search style="width: 1em; height: 1em; margin-right: 8px" /> -->
      <el-tab-pane name="account">
        <template #label>
          <span class="tab-item">
            <el-icon :size="30"><avatar style="margin-right: 8px" /></el-icon>
            账号登录
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="tab-item">
            <el-icon :size="20"><cellphone style="margin-right: 8px" /></el-icon
            >手机登录
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">主要链接</el-link>
    </div>

    <el-button type="primary" class="login-button" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import loginAccount from "./login-account.vue"
import loginPhone from "./login-phone.vue"

export default defineComponent({
  components: {
    loginAccount,
    loginPhone
  },
  setup() {
    const isKeepPassword = ref(true)
    const currentTab = ref("account")
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const phoneRef = ref<InstanceType<typeof loginPhone>>()

    const handleLoginClick = () => {
      if (currentTab.value == "account") {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log("phoneRef调用loginAction")
      }
    }
    return {
      isKeepPassword,
      handleLoginClick,
      accountRef,
      currentTab
    }
  }
})
</script>

//
<style scoped lang="less">
.tab-item {
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  width: 78px;
}

.account-control {
  display: flex;
  justify-content: space-between;
}

.login-button {
  width: 100%;
}
</style>
