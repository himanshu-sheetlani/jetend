import jwt from "jsonwebtoken";

/**
 * generate a JWT (project must pass its own secret!)
 */
export function generateJWT(payload, secret, options = {}) {
  if (!secret) throw new Error("JWT secret is required");
  // const defaults = { expiresIn: "1h" };
  return jwt.sign(payload, secret, { ...options });
}
