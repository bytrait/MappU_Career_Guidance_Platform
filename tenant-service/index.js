const tenantMiddleware = require("./tenant.middleware");
const tenantRoutes = require("./tenant.routes");

function registerTenant(app) {
  // Soft attach only — never blocks unrelated APIs
  app.use(tenantMiddleware);
  app.use("/api/v1/tenant", tenantRoutes);
}

module.exports = {
  registerTenant,
};
