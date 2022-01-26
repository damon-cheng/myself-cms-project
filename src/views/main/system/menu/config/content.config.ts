export const contentTableConfig = {
  propList: [
    { prop: "name", label: "菜單名稱", minWidth: "100" },
    {
      prop: "type",
      label: "類型",
      minWidth: "100"
    },
    {
      prop: "url",
      label: "菜單url",
      minWidth: "100"
    },
    { prop: "icon", label: "菜單icon", minWidth: "100" },
    {
      prop: "permission",
      label: "按鈕權限",
      minWidth: "100"
    },
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
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  title: "菜單列表",
  childrenProps: {
    rowKey: "id",
    treeProps: {
      children: "children"
    }
  },
  showFooter: false
}
