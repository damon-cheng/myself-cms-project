export const contentTableConfig = {
  propList: [
    { prop: "name", label: "用户名", minWidth: "100", slotName: "name" },
    {
      prop: "intro",
      label: "权限介绍",
      minWidth: "100",
      slotName: "intro"
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
  showIndexColumn: true,
  showSelectColumn: true,
  title: "用户列表"
}
