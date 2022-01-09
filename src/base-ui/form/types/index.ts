type IFormType = "input" | "password" | "datepicker" | "select"

export interface IFormItem {
  type: IFormType
  label: string
  placeholder?: string
  rules?: any[]
  options?: any[]
  otherOptions?: any
}
