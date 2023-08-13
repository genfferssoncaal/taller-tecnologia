import express from 'express'
import routes from '../routes/index.js'

let _express = null

export default function server({ config: { port, host } }) {
  _express = express().use(routes())
  return new Promise(resolve => {
    _express.listen(port, host, console.log('Server running on port:', port))
    resolve()
  })
}
