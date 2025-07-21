import app from './_app.js'

export default function GET(path, handler) {
  app.get(path, handler)
}
