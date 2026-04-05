const winston = require("winston");

const { combine, timestamp, errors, json, printf, colorize, metadata } =
  winston.format;

const isProduction = process.env.NODE_ENV === "production";

/**
 * Development format (human readable)
 */
const devFormat = combine(
  colorize(),
  timestamp(),
  errors({ stack: true }),
  metadata({ fillExcept: ["message", "level", "timestamp", "label"] }),
  printf(({ level, message, timestamp, stack, metadata }) => {
    const metaString =
      metadata && Object.keys(metadata).length
        ? JSON.stringify(metadata)
        : "";

    return `${timestamp} [${level}]: ${stack || message} ${metaString}`;
  })
);

/**
 * Production format (structured JSON)
 */
const prodFormat = combine(
  timestamp(),
  errors({ stack: true }),
  metadata({ fillExcept: ["message", "level", "timestamp", "label"] }),
  json()
);

const logger = winston.createLogger({
  level: isProduction ? "info" : "debug",
  format: isProduction ? prodFormat : devFormat,
  transports: [
    new winston.transports.Console()
  ],
  exitOnError: false
});

module.exports = logger;
