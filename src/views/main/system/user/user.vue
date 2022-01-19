<template>
  <div class="user">
    <div class="search">
      <page-search :searchFormConfig="searchFormConfig"></page-search>
      <ld-table
        :title="title"
        :listData="userList"
        :propList="propList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
        @selectionChange="selectionChange"
      >
        <template #header>
          <div>哈哈哈哈哈</div>
        </template>
        <template #headerHandler>
          <el-button>新建用户</el-button>
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
        <template #handler>
          <div class="handle-btns">
            <el-button :icon="Edit" size="mini" type="text">编辑</el-button>
            <el-button :icon="Delete" size="mini" type="text">删除</el-button>
          </div>
        </template>
      </ld-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import PageSearch from "@/components/page-search"
import { searchFormConfig } from "./config/search.config"
import { useStore } from "@/store"
import LdTable from "@/base-ui/table"

export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    LdTable
  },
  setup() {
    const store = useStore()
    store.dispatch("system/getPageListAction", {
      pageUrl: "/users/list",
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    const propList = [
      { prop: "name", label: "用户名", minWidth: "100", slotName: "name" },
      {
        prop: "realname",
        label: "真实姓名",
        minWidth: "100",
        slotName: "realname"
      },
      {
        prop: "cellphone",
        label: "手机号码",
        minWidth: "100",
        slotName: "cellphone"
      },
      { prop: "enable", label: "状态", minWidth: "100", slotName: "status" },
      {
        prop: "createAt",
        label: "创建时间",
        minWidth: "100",
        slotName: "createAt"
      },
      {
        prop: "updateAt",
        label: "更新时间",
        minWidth: "100",
        slotName: "updateAt"
      },
      {
        label: "操作",
        minWidth: "100",
        slotName: "handler"
      }
    ]

    let showIndexColumn = true
    let showSelectColumn = true

    const selectionChange = (value: any) => {
      console.log("selectionChange111：", value)
    }

    let title = "用户列表"
    return {
      searchFormConfig,
      userList,
      userCount,
      propList,
      showIndexColumn,
      showSelectColumn,
      selectionChange,
      title
    }
  }
})
</script>

<style scoped></style>
