import { Router } from 'express'

import service from '../service/index.js'

const router = Router()

export default () => {
  router.post('/actions', (request, response) => {
    service({ request, response })
  })

  return router
}
