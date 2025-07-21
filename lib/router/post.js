import app from './_app.js'

export default function POST(path, handler) {
  app.post(path, handler)
}
