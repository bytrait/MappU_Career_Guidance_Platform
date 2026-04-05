const jwt = require('jsonwebtoken');
const logger = require('../utils/logger.util');

const verifyAuthToken = (req, res, next) => {
  try {
    const token = req.cookies['auth-token'];
    if (!token) {
      return res.status(401).json({ success: false, message: 'Authentication token missing' });
    }

    const decoded = jwt.verify(token, process.env.ASSESSMENT_JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    logger.error('[AuthMiddleware] Invalid auth token', { error: err.message });
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
};

module.exports = verifyAuthToken;
