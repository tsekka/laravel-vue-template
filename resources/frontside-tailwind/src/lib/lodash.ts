export interface CustomLodash {
  get: Function
  has: Function
  set: Function
  clone: Function
  cloneDeep: Function
  endsWith: Function
  capitalize: Function
}
import get from 'lodash/get'
import has from 'lodash/has'
import set from 'lodash/set'
import clone from 'lodash/clone'
import cloneDeep from 'lodash/cloneDeep'
import endsWith from 'lodash/endsWith'
import capitalize from 'lodash/capitalize'

export const _: CustomLodash = {
  get,
  has,
  set,
  clone,
  cloneDeep,
  endsWith,
  capitalize,
}

export default _
