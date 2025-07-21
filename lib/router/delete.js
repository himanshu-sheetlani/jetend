import app from './_app.js'
import registerHandler from '../core/registerHandler.js'

export default function DELETE(path, handler) {
  registerHandler(app, 'delete', path, handler)
}
