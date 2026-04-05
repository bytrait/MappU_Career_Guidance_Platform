const logger = require("../utils/logger.util");

module.exports = (err, req, res, next) => {
  logger.error(err.message, {
    requestId: req.requestId,
    stack: err.stack
  });

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    requestId: req.requestId
  });
};
