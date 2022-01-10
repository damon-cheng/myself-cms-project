<template>
  <div class="user">
    <div class="search">
      <LD-form v-bind="searchFormConfig" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue"
import LDForm from "@/base-ui/form"
import { searchFormConfig } from "./config/search.config"

export default defineComponent({
  name: "user",
  components: {
    LDForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
