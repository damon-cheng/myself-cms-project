import { ref } from "vue"
import PageModal from "@/components/page-modal"

type CallBackFn = (row?: any) => void

export function usePageModal(newCb?: CallBackFn, editCb?: CallBackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  console.log("pageModalRef1111:", pageModalRef.value)
  const defaultInfo = ref({})
  const handleEditData = (row: any) => {
    defaultInfo.value = { ...row }
    pageModalRef.value!.dialogVisible = true
    editCb && editCb(row)
  }
  const handleNewData = () => {
    defaultInfo.value = {}
    pageModalRef.value!.dialogVisible = true
    newCb && newCb()
  }

  return [pageModalRef, defaultInfo, handleEditData, handleNewData]
}
