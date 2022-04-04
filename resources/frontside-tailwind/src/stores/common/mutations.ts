import { _ } from '@/lib/lodash'
import { AnyObject } from '@/types'

export const SET = function (
  state: AnyObject,
  payload: AnyObject | Array<any>
) {
  if (Array.isArray(payload) && payload.length === 2) {
    state[payload[0]] = payload[1]
    return
  } else if (typeof payload !== 'object' || payload === null) {
    return throwSetError(payload)
  }

  for (let [key, value] of Object.entries(payload)) {
    state[key] = value
  }
}

export const ADD_ITEM_START = function (
  state: AnyObject,
  item: [AnyObject],
  field = 'items'
) {
  state[field].unshift(item)
  state[field] = _.clone(_.get(state, field))
}

export const ADD_ITEM = function (
  state: AnyObject,
  item: AnyObject,
  field = 'items'
) {
  state[field].push(item)
  state[field] = _.clone(_.get(state, field))
}

export const ADD_OR_UPDATE_ITEM = function (
  state: AnyObject,
  updatedItem: AnyObject,
  field = 'items'
) {
  const item = state[field].find(
    (item: any) => parseInt(item.id) === parseInt(updatedItem.id)
  )
  if (typeof item === 'undefined') {
    return ADD_ITEM(state, updatedItem, field)
  }
  Object.assign(item, updatedItem)
  state[field] = _.clone(state[field])
}

export const UPDATE_ITEM = function (
  state: AnyObject,
  updatedItem: AnyObject,
  field = 'items'
) {
  const item = state[field].find(
    (item: AnyObject) => parseInt(item.id) === parseInt(updatedItem.id)
  )
  if (typeof item === 'undefined') {
    return throwUpdateError(field, updatedItem)
  }
  Object.assign(item, updatedItem)
  state[field] = _.clone(state[field])
}

export const REMOVE_ITEM = function (
  state: AnyObject,
  idOrItem: number | AnyObject,
  field = 'items'
) {
  const id = typeof idOrItem === 'object' ? idOrItem.id : idOrItem
  state[field] = state[field].filter((item: AnyObject) => item.id !== id)
}

function throwSetError(payload: AnyObject) {
  console.error(
    'Payload (of mutation SET) must be either array ([key, value]) or object with key value pairs.',
    payload
  )
}
function throwUpdateError(field: string, updatedItem: AnyObject) {
  console.error('Cannot update item - target item does not exist in items.', {
    field,
    updatedItem,
  })
}
