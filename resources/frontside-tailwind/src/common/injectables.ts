import { AnyObject } from "@/types";

let injectables: AnyObject | null;

const metaApp: HTMLMetaElement | null =
  document.head.querySelector('meta[name="app"]')

if (metaApp) {
  injectables = JSON.parse(metaApp.content)
} else {
  injectables = null
}

export default injectables
