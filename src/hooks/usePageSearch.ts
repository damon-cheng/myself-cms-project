import { ref } from "vue"
import PageContent from "@/components/page-content"

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handlerResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handlerQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }

  return [pageContentRef, handlerQueryClick, handlerResetClick]
}
