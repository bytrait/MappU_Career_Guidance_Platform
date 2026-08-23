const { getTenantBySlug, normalizeSlug } = require("./tenant.service");

function toPublicTenant(tenant) {
  return {
    id: tenant.id,
    code: tenant.code,
    name: tenant.name,
    plan: tenant.plan || "basic",
    isDefault: !!tenant.isDefault,
    theme: tenant.config?.theme || {},
    customization: tenant.config?.customization || {},
  };
}

/**
 * GET /api/v1/tenant?slug=mappu
 * Also accepts X-Tenant-Slug header.
 */
async function getTenant(req, res) {
  try {
    const raw =
      req.query.slug ||
      req.query.tenant ||
      req.headers["x-tenant-slug"];

    const tenant = await getTenantBySlug(
      raw ? normalizeSlug(String(raw)) : undefined
    );

    if (!tenant) {
      return res.status(404).json({
        message: "Tenant not found",
      });
    }

    return res.json(toPublicTenant(tenant));
  } catch (err) {
    console.error("Tenant controller error:", err);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

/**
 * GET /api/v1/tenant/:slug
 */
async function getTenantByPathSlug(req, res) {
  try {
    const tenant = await getTenantBySlug(normalizeSlug(req.params.slug));

    if (!tenant) {
      return res.status(404).json({
        message: "Tenant not found",
      });
    }

    return res.json(toPublicTenant(tenant));
  } catch (err) {
    console.error("Tenant controller error:", err);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

module.exports = {
  getTenant,
  getTenantByPathSlug,
};
