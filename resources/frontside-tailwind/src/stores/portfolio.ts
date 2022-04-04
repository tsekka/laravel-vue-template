import { AnyObject } from '@/types'
import { PortfolioItem } from '@/types/PortfolioItem'
import { defineStore } from 'pinia'
import collect from 'collect.js'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => {
    return {
      items: [] as PortfolioItem[],
    }
  },

  getters: {
    collection: (state) => collect(state.items),
    // isLoading: (state) => (key: string) => state.loading.includes(key),
  },

  actions: {
    // startLoading(key: string) {
    //   this.loading.push(key)
    // },
  },
})
