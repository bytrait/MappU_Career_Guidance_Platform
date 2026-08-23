const { getTenantBySlug, normalizeSlug } = require("./tenant.service");

/**
 * Soft middleware: attach req.tenant when X-Tenant-Slug (or ?slug=) is present.
 * Does NOT 404 the request — APIs must keep working without a tenant header.
 */
async function tenantMiddleware(req, res, next) {
  try {
    const raw =
      req.headers["x-tenant-slug"] ||
      req.query.slug ||
      req.query.tenant;

    if (raw) {
      const tenant = await getTenantBySlug(normalizeSlug(String(raw)));
      if (tenant) {
        req.tenant = tenant;
      }
    }

    next();
  } catch (err) {
    console.error("Tenant middleware error:", err);
    next();
  }
}

module.exports = tenantMiddleware;
