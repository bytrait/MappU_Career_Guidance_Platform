const { getTenantByDomain } = require("./tenant.service")

async function getTenant(req, res) {
  try {
    const tenant = await getTenantByDomain(req.headers.host)

    if (!tenant) {
      return res.status(404).json({
        message: "Tenant not found",
      })
    }

    return res.json({
      id: tenant.id,
      code: tenant.code,
      name: tenant.name,
      domain: tenant.domain,

      theme: tenant.config?.theme || {},

      customization:
        tenant.config?.customization || {},
    })
  } catch (err) {
    console.error("Tenant controller error:", err)

    return res.status(500).json({
      message: "Internal server error",
    })
  }
}

module.exports = {
  getTenant,
}