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
      field: "cellphone",
      type: "input",
      label: "電話號碼:",
      placeholder: "請輸入電話號碼"
    },
    {
      field: "enable",
      type: "select",
      label: "用戶狀態",
      placeholder: "請選擇用戶狀態",
      options: [
        {
          title: "啓用",
          value: "1"
        },
        {
          title: "禁用",
          value: "2"
        }
      ]
    },
    {
      field: "createAt",
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
