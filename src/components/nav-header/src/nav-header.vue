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
    // const arr = [
    //   {
    //     id: 38,
    //     name: "系统总览",
    //     type: 1,
    //     url: "/main/analysis",
    //     icon: "el-icon-monitor",
    //     sort: 1,
    //     children: [
    //       {
    //         id: 39,
    //         url: "/main/analysis/overview",
    //         name: "核心技术",
    //         sort: 106,
    //         type: 1,
    //         children: [
    //           {
    //             id: 38,
    //             name: "子项3",
    //             type: 2,
    //             url: "/main/analysis/overview/damon",
    //             sort: 1,
    //             children: null
    //           }
    //         ],
    //         parentId: 38
    //       }
    //     ]
    //   }
    // ]
    // const breadcrumbs = pathMapBreadcrumbs(arr, "/main/analysis/overview/damon")

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
