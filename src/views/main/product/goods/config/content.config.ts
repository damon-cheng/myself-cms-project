export const contentTableConfig = {
  propList: [
    { prop: "name", label: "商品名稱", minWidth: "100" },
    {
      prop: "oldPrice",
      label: "原價格",
      minWidth: "100",
      slotName: "oldPrice"
    },
    {
      prop: "newPrice",
      label: "現價格",
      minWidth: "100"
    },
    {
      prop: "imgUrl",
      label: "商品圖片",
      minWidth: "100",
      slotName: "image"
    },
    {
      prop: "enable",
      label: "狀態",
      minWidth: "100",
      slotName: "status"
    },
    {
      prop: "createAt",
      label: "創建時間",
      minWidth: "100",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "100",
      slotName: "updateAt"
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  title: "商品列表"
}
