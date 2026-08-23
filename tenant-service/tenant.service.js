const { PrismaClient } = require("./prisma/generated");

const prisma = new PrismaClient();

const DEFAULT_SLUG = "bytrait";

/**
 * Normalize an incoming slug (path segment).
 * Empty / reserved root → default ByTrait tenant.
 */
function normalizeSlug(raw) {
  if (!raw || typeof raw !== "string") return DEFAULT_SLUG;
  const slug = raw.trim().toLowerCase();
  if (!slug || slug === "default" || slug === "www") return DEFAULT_SLUG;
  return slug;
}

/**
 * Resolve tenant by URL path slug (code).
 * Falls back to the isDefault tenant, then code=bytrait.
 */
async function getTenantBySlug(rawSlug) {
  try {
    const slug = normalizeSlug(rawSlug);

    let tenant = await prisma.tenant.findFirst({
      where: { code: slug, isActive: true },
      include: { config: true },
    });

    if (!tenant) {
      tenant = await prisma.tenant.findFirst({
        where: { isDefault: true, isActive: true },
        include: { config: true },
      });
    }

    if (!tenant) {
      tenant = await prisma.tenant.findFirst({
        where: { code: DEFAULT_SLUG, isActive: true },
        include: { config: true },
      });
    }

    return tenant || null;
  } catch (err) {
    console.error("❌ Tenant fetch error:", err);
    return null;
  }
}

/**
 * @deprecated Domain-based resolution — kept for emergency fallback only.
 */
async function getTenantByDomain(host) {
  try {
    const cleanHost = (host || "").split(":")[0];

    if (cleanHost.includes("localhost") || cleanHost.includes("127.0.0.1")) {
      return getTenantBySlug(DEFAULT_SLUG);
    }

    const parts = cleanHost.split(".");
    const domain =
      parts.length > 2 ? parts.slice(-2).join(".") : cleanHost;

    const tenant = await prisma.tenant.findFirst({
      where: { domain, isActive: true },
      include: { config: true },
    });

    return tenant || getTenantBySlug(DEFAULT_SLUG);
  } catch (err) {
    console.error("❌ Tenant domain fetch error:", err);
    return null;
  }
}

module.exports = {
  DEFAULT_SLUG,
  normalizeSlug,
  getTenantBySlug,
  getTenantByDomain,
};
