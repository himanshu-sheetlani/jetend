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

export const get = (path, handler) => registerHandler(app, 'get', path, handler)
export const post = (path, handler) => registerHandler(app, 'post', path, handler)
export const patch = (path, handler) => registerHandler(app, 'patch', path, handler)
export const del = (path, handler) => registerHandler(app, 'delete', path, handler)

export default app
