// backend/utils/logger.js
export default function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
