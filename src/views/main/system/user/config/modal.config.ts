import { IForm } from "@/base-ui/form"

export const modalConfig: IForm = {
  colLayout: {
    span: 24
  },
  itemStyle: {},
  formItems: [
    {
      field: "name",
      type: "input",
      label: "用户名:",
      placeholder: "请输入用户名"
    },
    {
      field: "realname",
      type: "input",
      label: "真實姓名:",
      placeholder: "请输入真實姓名"
    },
    {
      field: "password",
      type: "password",
      label: "密码",
      placeholder: "请输入密码",
      isHidden: true
    },
    {
      field: "cellphone",
      type: "input",
      label: "電話號碼:",
      placeholder: "請輸入電話號碼"
    },
    {
      field: "departmentId",
      type: "select",
      label: "选择部门:",
      placeholder: "请选择部门",
      options: []
    },
    {
      field: "roleId",
      type: "select",
      label: "选择角色:",
      placeholder: "请选择角色",
      options: []
    }
  ]
}
