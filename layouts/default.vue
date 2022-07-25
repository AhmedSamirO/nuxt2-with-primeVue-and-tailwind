<template>
  <div>
    <Nuxt />
    <success-fail-message />
  </div>
</template>

<script>
import { handleLanguageChange } from "@/utils/langaugeChanger"
import SuccessFailMessage from "~/components/SuccessFailMessage.vue"

export default {
  name: "DefaultLayout",
  components: { SuccessFailMessage },
  data() {
    return {}
  },
  created() {
    if (process.client) {
      const lang = localStorage?.getItem("lang") || this?.$i18n?.locale || "ar"
      handleLanguageChange(this, lang)
    }
  },
}
</script>
