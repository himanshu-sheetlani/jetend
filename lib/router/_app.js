// ./lib/router/_app.js
import express from 'express'
import registerHandler from '../core/registerHandler.js'
import start from './start.js'

const app = express()
app.use(express.json())



// Route helpers that support middlewares + handler
export const get = (path, ...fns) => registerHandler(app, 'get', path, ...fns)
export const post = (path, ...fns) => registerHandler(app, 'post', path, ...fns)
export const patch = (path, ...fns) => registerHandler(app, 'patch', path, ...fns)
export const del = (path, ...fns) => registerHandler(app, 'delete', path, ...fns)
export const start = (port) => start(port)

export default app
