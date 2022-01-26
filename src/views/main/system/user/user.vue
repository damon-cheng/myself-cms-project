<template>
  <div class="user">
    <div class="search">
      <page-search
        :searchFormConfig="searchFormConfig"
        @resetBtnClick="handlerResetClick"
        @queryBtnClick="handlerQueryClick"
      ></page-search>
      <page-content
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      ></page-content>
      <page-modal
        pageName="users"
        :defaultInfo="defaultInfo"
        ref="pageModalRef"
        :modalConfig="modalConfigRef"
      ></page-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import PageModal from "@/components/page-modal"

import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { modalConfig } from "./config/modal.config"

import { usePageSearch } from "@/hooks/usePageSearch"
import { usePageModal } from "@/hooks/usePageModal"

import { useStore } from "@/store"

export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handlerQueryClick, handlerResetClick] =
      usePageSearch()

    const newCallBack = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === "password"
      )
      passwordItem!.isHidden = false
    }
    const editCallBack = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === "password"
      )
      passwordItem!.isHidden = true
    }

    const store = useStore()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === "departmentId"
      )
      departmentItem!.options = store.state.entireDepartment.map((item) => ({
        title: item.name,
        value: item.id
      }))
      const roleItem = modalConfig.formItems.find(
        (item) => item.field === "roleId"
      )
      roleItem!.options = store.state.entireRole.map((item) => ({
        title: item.name,
        value: item.id
      }))
      return modalConfig
    })

    const [pageModalRef, defaultInfo, handleEditData, handleNewData] =
      usePageModal(newCallBack, editCallBack)

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handlerResetClick,
      handlerQueryClick,
      modalConfig,
      handleNewData,
      handleEditData,
      pageModalRef,
      defaultInfo,
      modalConfigRef
    }
  }
})
</script>

<style scoped></style>
