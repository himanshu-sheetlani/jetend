// lib/core/registerHandler.js
export default function registerHandler(app, method, path, ...fns) {
  if (fns.length === 0) throw new Error("Handler is required");
  const routeHandler = fns.pop(); // last is the real handler

  const wrapped = async (req, res, next) => {
    try {
      // support (req, res, next) or ({ req, res, next })
      if (routeHandler.length >= 2) {
        const r = routeHandler(req, res, next);
        if (r instanceof Promise) await r;
      } else {
        const r = routeHandler({ req, res, next });
        if (r instanceof Promise) await r;
      }
    } catch (err) {
      next(err);
    }
  };
  
  // If there are middleware functions, create a proper middleware chain
  if (fns.length > 0) {
    app[method](path, ...fns, wrapped);
  } else {
    app[method](path, wrapped);
  }
}
