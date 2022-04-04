import { RouteLocationRaw } from 'vue-router'
export { PropType } from 'vue'

export interface AnyObject {
  [key: string]: any
}

export interface NavItem {
  text: string
  to: RouteLocationRaw
}

export interface TitleAndDescription {
  title: string
  description: string
}

export interface IntroTitleSubtitle {
  intro: string | null
  title: string
  subtitle: string
}
