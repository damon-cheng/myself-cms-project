import { IForm } from "@/base-ui/form"

export const searchFormConfig: IForm = {
  labelWidth: "120px",
  colLayout: {
    span: 8
  },
  itemStyle: {
    padding: "20px 30px"
  },
  formItems: [
    {
      field: "name",
      type: "input",
      label: "用戶名稱:",
      placeholder: "请输入用戶名稱"
    },
    {
      field: "intro",
      type: "input",
      label: "權限介紹:",
      placeholder: "请输入权限介紹"
    },
    {
      field: "createTime",
      type: "datepicker",
      label: "创建时间",
      placeholder: "请输入时间",
      otherOptions: {
        "start-placeholder": "选择开始时间",
        "end-placeholder": "选择结束时间",
        type: "daterange"
      }
    }
  ]
}
