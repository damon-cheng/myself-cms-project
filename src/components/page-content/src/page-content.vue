<template>
  <div class="page-content">
    <ld-table
      v-bind="contentTableConfig"
      :listData="dataList"
      :listCount="dataCount"
      @selectionChange="selectionChange"
      v-model:page="pageInfo"
    >
      <!-- <template #header>
          <div>哈哈哈哈哈</div>
        </template> -->
      <template #headerHandler>
        <el-button
          v-if="isCreate"
          type="primary"
          size="medium"
          @click="handleNewClick"
          >新建用户</el-button
        >
      </template>
      <template #status="scope">
        <el-button
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? "启用" : "禁用" }}</el-button
        >
      </template>
      <template #createAt="scope">
        <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            v-if="isUpdate"
            size="mini"
            type="text"
            @click="handleEditClick(scope.row)"
            ><el-icon><Edit /></el-icon>编辑</el-button
          >
          <el-button
            v-if="isDelete"
            size="mini"
            type="text"
            @click="handleDeleteClick(scope.row)"
            ><el-icon><Delete /></el-icon>删除</el-button
          >
        </div>
      </template>
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </ld-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue"
import LdTable from "@/base-ui/table"
import { useStore } from "@/store"
import { userPermission } from "@/hooks/userPermission"

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  components: {
    LdTable
  },
  emits: ["newBtnClick", "editBtnClick"],
  setup(props, { emit }) {
    const store = useStore()

    const isCreate = userPermission(props.pageName as string, "create")
    const isUpdate = userPermission(props.pageName as string, "update")
    const isDelete = userPermission(props.pageName as string, "delete")
    const isQuery = userPermission(props.pageName as string, "query")

    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return false
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }

    getPageData()

    //const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)
    const dataList = computed(() =>
      store.getters["system/pageListData"](props.pageName)
    )

    const dataCount = computed(() =>
      store.getters["system/pageListCount"](props.pageName)
    )

    const selectionChange = (value: any) => {
      console.log("selectionChange111：", value)
    }

    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === "status") return false
        if (item.slotName === "createAt") return false
        if (item.slotName === "updateAt") return false
        if (item.slotName === "handler") return false
        return true
      }
    )

    const handleDeleteClick = (row: any) => {
      store.dispatch("system/deletePageDataAction", {
        pageName: props.pageName,
        id: row.id
      })
    }

    const handleNewClick = () => {
      emit("newBtnClick")
    }
    const handleEditClick = (row: any) => {
      emit("editBtnClick", row)
    }

    return {
      dataList,
      dataCount,
      //userCount,
      selectionChange,
      getPageData,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
    }
  }
})
</script>

<style scoped></style>
