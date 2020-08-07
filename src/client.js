import * as sapper from '@sapper/app'
import { api } from './api'
if (window)
  api('manage').then((app) => {
    window.api = app
    sapper.start({
      target: document.querySelector('#sapper')
    })
  })
