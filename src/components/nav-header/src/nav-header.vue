<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <component :is="ioncName"></component>
    </el-icon>
    <div class="content">
      <div><ld-bread-crumb :breadcrumbs="breadcrumbs" /></div>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import userInfo from "./user-info.vue"
import LdBreadCrumb, { IBreadCrumb } from "@/base-ui/breadcrumb"
import { pathMapBreadcrumbs } from "@/utils/map-menus"
import { useStore } from "@/store"
import { useRoute } from "vue-router"

export default defineComponent({
  components: {
    userInfo,
    LdBreadCrumb
  },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false)
    let ioncName = computed(() => {
      return !isFold.value ? "Fold" : "FolderAdd"
    })
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("foldChange", isFold.value)
    }

    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const currentPath = useRoute()
      return pathMapBreadcrumbs(userMenus, currentPath.path)
    })

    return {
      isFold,
      ioncName,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
