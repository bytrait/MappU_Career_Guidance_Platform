const { getTenantByDomain } = require("./tenant.service")

async function tenantMiddleware(req, res, next) {
  try {
    const tenant = await getTenantByDomain(req.headers.host)

    if (!tenant) {
      return res.status(404).json({
        message: "Tenant not found",
      })
    }

    // attach globally
    req.tenant = tenant

    next()
  } catch (err) {
    console.error("Tenant middleware error:", err)
    res.status(500).json({ message: "Tenant error" })
  }
}

module.exports = tenantMiddleware