import bcrypt from "bcryptjs";

export async function hashPassword(password, saltRounds = 10) {
  if (typeof password !== "string" || !password) {
    throw new Error("Password is required");
  }
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hash(password, salt);
}
