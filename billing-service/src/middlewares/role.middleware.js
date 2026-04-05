const logger = require("../utils/logger.util");

module.exports = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: "Authentication required",
          requestId: req.requestId
        });
      }

      const userRole = req.user.role;

      if (!allowedRoles.includes(userRole)) {
        logger.warn?.("Role access denied", {
          requestId: req.requestId,
          userId: req.user.id,
          role: userRole,
          allowedRoles
        });

        return res.status(403).json({
          success: false,
          message: "Access denied",
          requestId: req.requestId
        });
      }

      next();
    } catch (error) {
      logger.error("Role middleware error", {
        requestId: req.requestId,
        error: error.message
      });

      return res.status(500).json({
        success: false,
        message: "Authorization error",
        requestId: req.requestId
      });
    }
  };
};
