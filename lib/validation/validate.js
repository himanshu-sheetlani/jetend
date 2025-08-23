export function validate(data, rules) {
  for (const field in rules) {
    const value = data[field];
    const checks = rules[field].split("|");

    for (const check of checks) {
      if (check === "required" && (value === undefined || value === "")) {
        throw new Error(`${field} is required`);
      }
      if (check.startsWith("min:") && value.length < parseInt(check.split(":")[1])) {
        throw new Error(`${field} must have at least ${check.split(":")[1]} characters`);
      }
      if (check.startsWith("max:") && value.length > parseInt(check.split(":")[1])) {
        throw new Error(`${field} can have at max ${check.split(":")[1]} characters`);
      }
      if (check === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
        throw new Error(`${field} must be a valid email`);
      }
    }
    return true
  }
}
