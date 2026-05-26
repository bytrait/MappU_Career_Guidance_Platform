const tenantMiddleware = require("./tenant.middleware")
const tenantRoutes = require("./tenant.routes")
const cors = require("cors");

function registerTenant(app) {
  // middleware (apply globally)
//   app.use(express.json())
  app.use(tenantMiddleware)

  // route
  app.use("/api/v1/tenant", tenantRoutes)
}

module.exports = {
  registerTenant,
}