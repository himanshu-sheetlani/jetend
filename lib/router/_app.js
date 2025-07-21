import express from 'express'
import loadConfig from '../core/loadConfig.js'

const app = express()
app.use(express.json())

// Load port and autoStart config
const config = await loadConfig()
const PORT = config.port || process.env.PORT || 3000
const autoStart = config.autoStart !== false  // default true

// Start server unless explicitly turned off
if (autoStart) {
  app.listen(PORT, () => {
    console.log(`🚀 Jetend server running on http://localhost:${PORT}`)
  })
}

export default app
