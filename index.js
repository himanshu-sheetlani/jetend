// jetend/index.js  (main entry for the package)
// index.js (root of JetEnd)

import db from "./lib/db/_app.js";
import * as auth from "./lib/auth/_app.js";
import * as router from "./lib/router/_app.js";
import * as utils from "./lib/utils/_app.js";

export const { hashPassword, comparePassword, generateJWT, verifyJWT, requireAuth} = auth;
export const { get, post, patch, del } = router;
export const { validate, success, error, sendEmail} = utils;

export { db, auth, router, utils };
