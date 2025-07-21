import fs from 'fs/promises'

export default async function loadConfig() {
  try {
    const configText = await fs.readFile('jetend.config.js', 'utf-8')
    const module = await import(`file://${process.cwd()}/jetend.config.js`)
    return module.default || {}
  } catch {
    return {}
  }
}
