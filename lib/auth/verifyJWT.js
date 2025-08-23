import jwt from "jsonwebtoken";

export function verifyJWT(token, secret) {
  if (!secret) {
    throw new Error("JWT secret is required");
  }
  try {
    const result =jwt.verify(token, secret);
    return result
  } catch (err) {
    return null;
  }
}
