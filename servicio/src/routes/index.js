import events from 'events'
events.EventEmitter.defaultMaxListeners = 20

import { Router, json } from 'express'

import cors from 'cors'

import ActionsRoutes from './actions.routes.js'

export default () => {
  const router = Router()

  router.use(json())
  router.use(cors())
  router.use(ActionsRoutes())

  return router
}
