const logger = require('../utils/logger.util');

const checkRole = (allowedRoles = []) => {
  return (req, res, next) => {
    try {
      const userRole = req.user?.role;

      if (!userRole) {
        logger.warn('[RoleMiddleware] Role missing in token');
        return res.status(403).json({ success: false, message: 'Access forbidden: No role assigned' });
      }

      if (!allowedRoles.includes(userRole)) {
        logger.warn('[RoleMiddleware] Access denied for role:', userRole);
        return res.status(403).json({ success: false, message: 'Access forbidden: Insufficient privileges' });
      }

      next();
    } catch (err) {
      logger.error('[RoleMiddleware] Error during role verification', { error: err.message });
      return res.status(403).json({ success: false, message: 'Access denied' });
    }
  };
};

module.exports = checkRole;
