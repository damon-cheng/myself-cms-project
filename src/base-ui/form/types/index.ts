type IFormType = "input" | "password" | "datepicker" | "select"

export interface IFormItem {
  type: IFormType
  label: string
  placeholder?: string
  rules?: any[]
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
