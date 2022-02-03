<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-icon class="el-icon--right">
          <el-avatar :size="20" :src="circleUrl"></el-avatar>
        </el-icon>
        <span class="user-name">{{ userName }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitClick">退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from "vue"
import { useStore } from "@/store"
import { useRouter } from "vue-router"
import localCache from "@/utils/cache"

export default defineComponent({
  setup() {
    const state = reactive({
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "default", "small"]
    })

    const { circleUrl } = toRefs(state)

    const store = useStore()
    const router = useRouter()
    const userName = computed(() => store.state.login.userInfo.name)
    const handleExitClick = () => {
      localCache.deleteCache("token")
      router.push("/main")
    }
    return {
      circleUrl,
      userName,
      handleExitClick
    }
  }
})
</script>

<style scoped lang="less">
.user-info {
  display: flex;
  align-items: center;
}

.el-dropdown-link {
  display: flex;
  align-content: space-around;
}

.user-name {
  margin-left: 10px;
}
</style>
