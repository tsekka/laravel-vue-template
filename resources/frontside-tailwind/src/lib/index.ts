import { AnyObject } from '@/types'
import _ from '@/lib/lodash'

export interface Lib {
  _: AnyObject
  stores: null | AnyObject
}

const lib: Lib = {
  _: _ as AnyObject,
  stores: null as null | AnyObject, // stores will be added from App.vue after provide()
}

export default lib
