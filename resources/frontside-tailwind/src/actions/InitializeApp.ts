import _ from '@/lib/lodash'
import axios from 'axios'
import injectables from '@/common/injectables'
import { AnyObject } from '@/types'

interface SchemaItem {
  injectedDataKey: string
  set: string[]
}

const injectSchema: SchemaItem[] = [
  {
    injectedDataKey: 'app_base',
    set: ['main', 'app_base'],
  },
]

class InitializeApp {
  injectables: AnyObject | null
  $stores: AnyObject
  isUnauthenticated: boolean | null
  loading: boolean | null

  constructor($stores: AnyObject) {
    this.injectables = injectables
    this.$stores = $stores
    this.isUnauthenticated = null
    this.loading = null
  }

  async init() {
    /**
     * 1. First lets inject all data or if no data is available, then
     * fetch injectables from single route to load app faster.
     */
    await this.inject()

    /**
     * 1.1 If unauthenticated, then we can just finish here
     */
    if (this.isUnauthenticated) return

    return 'OK'
  }

  async inject() {
    if (!this.injectables) {
      this.loading = true
      try {
        const response = await axios.get('inject')
        this.injectables = _.get(response, 'data', {})
      } finally {
        this.loading = true
      }
    }

    let injectableData
    for (let [key, item] of Object.entries(injectSchema)) {

      injectableData = _.get(this.injectables, item.injectedDataKey, null)
      if (!injectableData) continue

      _.set(this.$stores, item.set, injectableData)
    }
    this.$stores.main.initialized = true

    return Promise.resolve()
  }
}

export default InitializeApp
