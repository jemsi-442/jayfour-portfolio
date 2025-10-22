// 404 Not Found middleware
export const notFound = (req, res, next) => {
  const error = new Error(`🔍 Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Global Error Handler middleware
export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    success: false,
    message: err.message || "Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
