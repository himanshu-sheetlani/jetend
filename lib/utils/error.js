export function error(res, message = "Something went wrong", statusCode = 500, details = null) {
  return res.status(statusCode).json({
    success: false,
    message,
    ...(details && { details }),
  });
}
