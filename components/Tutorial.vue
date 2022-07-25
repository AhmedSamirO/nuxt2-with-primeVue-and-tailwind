<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container">
      <div class="pt-8">
        <div class="w-full bg-white shadow rounded p-6">
          <div>
            Lang:
            <Button
              :label="$i18n.locale == 'ar' ? 'en' : 'ar'"
              class="p-button-text"
              @click="changeLanguage"
            />
          </div>
        </div>
        <div class="w-full bg-white shadow rounded p-6">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 p-fluid">
              <Dropdown
                class="p-inputtext-lg"
                v-model="selectedCity"
                :options="cities"
                optionLabel="name"
                :placeholder="$t('selectCity')"
              />
            </div>
            <div class="col-span-12 md:col-span-6 p-fluid mt-5">
              <span class="p-float-label">
                <InputText id="username" v-model="value1" type="text" />
                <label for="username">{{ $t("userName") }}</label>
              </span>
            </div>
            <div class="col-span-12 md:col-span-6 p-fluid">
              <label for="username">{{ $t("userName") }}</label>
              <InputText id="username" v-model="value1" type="text" />
            </div>
          </div>
        </div>
      </div>

      <div class="w-full bg-white shadow rounded p-6 mt-8">
        <div class="flex flex-wrap">
          <div class="w-full p-fluid">
            <Dropdown
              class="p-inputtext-lg"
              v-model="selectedCity"
              :options="cities"
              optionLabel="name"
              :placeholder="$t('selectCity')"
            />
          </div>
          <div class="w-full md:w-1/2 p-fluid mt-5 md:pe-2">
            <span class="p-float-label">
              <InputText id="username" v-model="value1" type="text" />
              <label for="username">{{ $t("userName") }}</label>
            </span>
          </div>
          <div class="w-full md:w-1/2 p-fluid md:ps-2">
            <label for="username">{{ $t("userName") }}</label>
            <InputText id="username" v-model="value1" type="text" />
          </div>
        </div>
        <div class="p-fluid">
          <Button label="Get FAQs" @click="getFAQs"></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { handleLanguageChange } from "@/utils/langaugeChanger"
import { GET_FAQS } from "~/utils/storeActions"
// import { userToken, setHeaderToken } from "~/utils/axios"

export default {
  name: "NuxtTutorial",
  comments: {},
  data() {
    return {
      value1: "",
      selectedCity: null,
      cities: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
      isFirstTime: true,
    }
  },
  methods: {
    changeLanguage() {
      let newLang = "ar"
      if (this.$i18n.locale === "ar") {
        newLang = "en"
      }
      handleLanguageChange(this, newLang)
    },
    getFAQs() {
      this.$store.dispatch("common/" + GET_FAQS).then(() => {
        // example for set token
        /*
        if (this.isFirstTime) {
          localStorage.setItem(userToken, "testin user data ya lol")
          setTimeout(() => {
            setHeaderToken()
            this.isFirstTime = false
          }, 5000)
        } else {
          localStorage.removeItem(userToken)
          setTimeout(() => {
            setHeaderToken()
          }, 5000)
        }
        */
      })
    },
  },
}
</script>
