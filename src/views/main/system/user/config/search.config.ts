import { IForm } from "@/base-ui/form"

export const searchFormConfig: IForm = {
  formItems: [
    {
      type: "input",
      label: "用户名:",
      placeholder: "请输入用户名"
    },
    {
      type: "password",
      label: "密码:",
      placeholder: "请输入密码"
    },
    {
      type: "select",
      label: "喜欢的运动",
      placeholder: "请选择喜欢的运动",
      options: [
        {
          title: "足球",
          value: "football"
        },
        {
          title: "篮球",
          value: "basketball"
        }
      ]
    },
    {
      type: "datepicker",
      label: "创建时间",
      placeholder: "请输入时间",
      otherOptions: {
        "start-placeholder": "选择开始时间",
        "end-placeholder": "选择结束时间",
        type: "daterange"
      }
    }
  ],
  labelWidth: "120px",
  colLayout: {
    span: 8
  },
  itemStyle: {
    padding: "20px 30px"
  }
}
