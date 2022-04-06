import { defineStore } from 'pinia'
import { AnyObject } from '@/types'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      app_base: '',
      loading: [] as string[],
      settings: {} as AnyObject,
      showContactFormModal: false,
    }
  },
  
  getters: {
    appIsLoading: (state) => state.loading.length > 0,
    isLoading: (state) => (key: string) => state.loading.includes(key),
  },

  actions: {
    startLoading(key: string) {
      this.loading.push(key)
    },
    stopLoading(key: string) {
      this.loading = this.loading.filter((item) => item !== key)
    },
  },
})
