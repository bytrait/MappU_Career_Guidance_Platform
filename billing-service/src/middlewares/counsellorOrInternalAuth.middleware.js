const jwt = require('jsonwebtoken');
const logger = require('../utils/logger.util');

/**
 * Counsellor cookie JWT, or Auth service internal call (x-internal-secret).
 * Internal callers must pass x-counsellor-id (or body.counsellorId on POST).
 */
module.exports = (req, res, next) => {
  try {
    const internalSecret = req.headers['x-internal-secret'];

    if (internalSecret) {
      if (internalSecret !== process.env.INTERNAL_SERVICE_SECRET) {
        logger.warn('Invalid internal service access attempt', {
          requestId: req.requestId,
          ip: req.ip,
        });

        return res.status(403).json({
          success: false,
          message: 'Forbidden',
          requestId: req.requestId,
        });
      }

      req.authSource = 'internal';
      return next();
    }

    const token = req.cookies['auth-token'];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required',
        requestId: req.requestId,
      });
    }

    const decoded = jwt.verify(token, process.env.BILLING_JWT_SECRET);
    req.user = decoded;
    req.authSource = 'counsellor';

    return next();
  } catch (error) {
    logger.error('Counsellor or internal auth failed', {
      requestId: req.requestId,
      error: error.message,
    });

    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token',
      requestId: req.requestId,
    });
  }
};
