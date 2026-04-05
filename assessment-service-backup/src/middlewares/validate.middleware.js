const { ZodError } = require('zod');
const loogger = require('../utils/logger.util')

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    loogger.info(`[ValidateMiddleware] Validation passed for ${req.method} ${req.originalUrl}`);
    return next();
  } catch (error) {
    loogger.error(`[ValidateMiddleware] Validation failed for ${req.method} ${req.originalUrl}: ${error.message}`, {
      stack: error.stack,
    });
    if (error instanceof ZodError && Array.isArray(error.errors)) {
      const formatted = error.errors.map((e) => ({
        path: e.path.join('.'),
        message: e.message,
      }));
      return res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: formatted,
      });
    }

    // fallback for non-Zod errors
    return res.status(500).json({
      status: 'error',
      message: 'Internal validation error',
      detail: error.message,
    });
  }
};

module.exports = validate;
