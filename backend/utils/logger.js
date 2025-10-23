// backend/utils/logger.js

export const logger = {
  info: (message) => console.log(`ℹ️  ${message}`),
  warn: (message) => console.warn(`⚠️  ${message}`),
  error: (message) => console.error(`❌  ${message}`),
};

export default logger;
