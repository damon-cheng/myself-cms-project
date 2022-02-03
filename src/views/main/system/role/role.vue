<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      pageName="role"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :othersInfo="othersInfo"
    >
      <el-tree
        ref="elTreeRef"
        :data="menus"
        show-checkbox
        node-key="id"
        highlight-current
        :props="{ children: 'children', label: 'name' }"
        @check="handleCheckChange"
      />
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from "vue"
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import PageModal from "@/components/page-modal"

import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { modalConfig } from "./config/modal.config"

import { usePageModal } from "@/hooks/usePageModal"
import { useStore } from "@/store"

import { ElTree } from "element-plus"
import { menuMapLeafKeys } from "@/utils/map-menus"

export default defineComponent({
  name: "role",
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallBack = (row: any) => {
      nextTick(() => {
        const leafKeys = menuMapLeafKeys(row.menuList)
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const [pageModalRef, defaultInfo, handleEditData, handleNewData] =
      usePageModal(undefined, editCallBack)

    const store = useStore()
    const menus = computed(() => store.state.entireMenu)

    const othersInfo = ref({})

    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      othersInfo.value = { menuList }
    }

    return {
      searchFormConfig,
      contentTableConfig,
      usePageModal,
      pageModalRef,
      defaultInfo,
      handleEditData,
      handleNewData,
      modalConfig,
      menus,
      othersInfo,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<style scoped></style>
