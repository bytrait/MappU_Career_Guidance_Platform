const logger = require("../utils/logger.util");

module.exports = (req, res, next) => {
  try {
    const internalSecret = req.headers["x-internal-secret"];

    if (!internalSecret) {
      return res.status(401).json({
        success: false,
        message: "Internal access required",
        requestId: req.requestId
      });
    }

    if (internalSecret !== process.env.INTERNAL_SERVICE_SECRET) {
      logger.warn("Invalid internal service access attempt", {
        requestId: req.requestId,
        ip: req.ip
      });

      return res.status(403).json({
        success: false,
        message: "Forbidden",
        requestId: req.requestId
      });
    }

    next();
  } catch (error) {
    logger.error("Internal auth middleware error", {
      requestId: req.requestId,
      error: error.message
    });

    return res.status(500).json({
      success: false,
      message: "Internal authentication error",
      requestId: req.requestId
    });
  }
};
