import { useMainStore } from '@/stores/main'
import { usePortfolioStore } from '@/stores/portfolio'

export const useStores = () => {
  return {
    main: useMainStore(),
    portfolio: usePortfolioStore(),
  }
}
