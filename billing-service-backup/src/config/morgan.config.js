const morgan = require("morgan");
const logger = require("../utils/logger.util");

/**
 * Add custom token for requestId
 */
morgan.token("requestId", (req) => req.requestId);

/**
 * Stream to forward morgan logs to winston
 */
const stream = {
  write: (message) => {
    logger.info(message.trim());
  }
};

/**
 * Custom format including requestId
 */
const format =
  ":requestId :method :url :status :response-time ms";

/**
 * Dev vs Prod format
 */
const morganMiddleware =
  process.env.NODE_ENV === "production"
    ? morgan(format, { stream })
    : morgan(format, { stream });

module.exports = morganMiddleware;
