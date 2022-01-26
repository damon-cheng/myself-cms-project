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
      field: "intro",
      type: "input",
      label: "权限名:",
      placeholder: "请输入权限名称"
    },
    {
      field: "password",
      type: "password",
      label: "密码:",
      placeholder: "请输入密码"
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
