import { verifyJWT } from "./verifyJWT.js";

/**
 * Express middleware factory:
 *   app.get("/me", requireAuth(process.env.JWT_SECRET), handler)
 *
 * opts.getToken(req)  -> custom token extractor
 * opts.onFail(res, status, msg) -> custom fail responder
 */
export function requireAuth(secret, opts = {}) {
  const { getToken, onFail } = opts;

  return (req, res, next) => {
    const token = (getToken || defaultGetToken)(req);
    if (!token) return fail(res, 401, "No token provided");

    const decoded = verifyJWT(token, secret);
    if (decoded){
      req.user = decoded;
      next();
    }
    else{
      res.status(401).send('Unauthorized');
    }
  };


  function fail(res, status, msg) {
    if (typeof onFail === "function") return onFail(res, status, msg);
    return res.status(status).json({ error: msg });
  }
}

function defaultGetToken(req) {
  const auth = req.headers?.authorization;
  if (auth && auth.startsWith("Bearer ")) return auth.slice(7);
  if (req.cookies?.token) return req.cookies.token;       // if cookie-parser in use
  if (req.query?.token) return req.query.token;       // fallback for testing
  return null;
}
