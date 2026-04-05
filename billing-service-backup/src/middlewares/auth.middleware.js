const jwt = require("jsonwebtoken");
const logger = require("../utils/logger.util");

module.exports = (req, res, next) => {
  try {
    const token = req.cookies['auth-token'];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
        requestId: req.requestId
      });
    }

    const decoded = jwt.verify(token, process.env.BILLING_JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    logger.error("JWT verification failed", {
      requestId: req.requestId,
      error: error.message
    });

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
      requestId: req.requestId
    });
  }
};
