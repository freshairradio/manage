// This must be initialised *after* api bootstrapping
const api = globalThis.api || { get() {} }
import { writable } from 'svelte/store'
let apiStores = {}

export const app = writable(
  new Proxy(apiStores, {
    get(target, key) {
      if (key in target) {
        return target[key]
      } else {
        target[key] = api.get('/key')
        return target[key]
      }
    }
  })
)
