import app from './_app.js'
import registerHandler from '../core/registerHandler.js'

export default function patch(path, handler) {
  registerHandler(app, 'patch', path, handler)
}
