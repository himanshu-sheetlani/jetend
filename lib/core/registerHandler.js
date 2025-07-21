export default function registerHandler(app, method, path, handler) {
  app[method](path, async (req, res, next) => {
    try {
      const context = { req, res, next }

      // If the handler expects 2 arguments, pass req, res
      if (handler.length >= 2) {
        await handler(req, res)
      } else {
        const result = handler(context)
        if (result instanceof Promise) await result
      }
    } catch (err) {
      next(err)
    }
  })
}
