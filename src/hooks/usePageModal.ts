import { ref } from "vue"
import PageModal from "@/components/page-modal"

type CallBackFn = () => void

export function usePageModal(newCb?: CallBackFn, editCb?: CallBackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleEditData = (row: any) => {
    defaultInfo.value = { ...row }
    pageModalRef.value!.dialogVisible = true
    editCb && editCb()
  }
  const handleNewData = () => {
    defaultInfo.value = {}
    pageModalRef.value!.dialogVisible = true
    newCb && newCb()
  }

  return [pageModalRef, defaultInfo, handleEditData, handleNewData]
}
