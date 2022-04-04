import { AnyObject } from '@/types'

export const getters = {
  getBy: (state: AnyObject) => (fieldName: string, key: string, value: any) => {
    return getBy(state[fieldName], key, value)
  },
  findBy:
    (state: AnyObject) => (fieldName: string, key: string, value: any) => {
      return findBy(state[fieldName], key, value)
    },
  has: (state: AnyObject) => (fieldName: string, key: string, value: any) => {
    return has(state[fieldName], key, value)
  },
}

export const findBy = function (items: [AnyObject], key: string, value: any) {
  return items.find((items) => items[key] === value)
}

export const has = function (items: [AnyObject], key: string, value: any) {
  return items.some((item: AnyObject) => item[key] === value)
}

export const getBy = function (items: [AnyObject], key: string, value: any) {
  if (Array.isArray(value)) {
    return items.filter((item: AnyObject) => value.includes(item[key]))
  }
  return items.filter((item: AnyObject) => item[key] === value)
}

export default getters
