// ./lib/router/_app.js
import express from 'express'
import loadConfig from '../core/loadConfig.js'
import registerHandler from '../core/registerHandler.js'

const app = express()
app.use(express.json())

// Load port and autoStart config
const config = await loadConfig()
const PORT = config.port || process.env.PORT || 3000
const autoStart = config.autoStart !== false  // default true

if (autoStart) {
  app.listen(PORT, () => {
    console.log(`🚀 Jetend server running at http://localhost:${PORT}`);
  });
}

// Route helpers that support middlewares + handler
export const get = (path, ...fns) => registerHandler(app, 'get', path, ...fns)
export const post = (path, ...fns) => registerHandler(app, 'post', path, ...fns)
export const patch = (path, ...fns) => registerHandler(app, 'patch', path, ...fns)
export const del = (path, ...fns) => registerHandler(app, 'delete', path, ...fns)

export default app
