import { AnyObject } from '@/types'

export interface Injectables {
  env: string
}

let injectables: Injectables | null

const metaApp: HTMLMetaElement | null =
  document.head.querySelector('meta[name="app"]')

if (metaApp) {
  injectables = JSON.parse(metaApp.content)
} else {
  injectables = null
}

export default injectables
