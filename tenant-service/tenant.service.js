const { PrismaClient } = require("./prisma/generated/default")

const prisma = new PrismaClient()

async function getTenantByDomain(host) {
  try {
    // remove port
    const cleanHost = host.split(":")[0]

    console.log("🌐 Incoming Host:", cleanHost)

    /* =======================================================
       LOCAL DEVELOPMENT FALLBACK
    ======================================================= */
    if (
      cleanHost.includes("localhost") ||
      cleanHost.includes("127.0.0.1")
    ) {
      console.log("🛠 Using default tenant for local development")

      return await prisma.tenant.findFirst({
        where: {
          code: "default",
        },
        include: {
          config: true,
        },
      })
    }

    /* =======================================================
       DOMAIN NORMALIZATION
       auth.mappu.com -> mappu.com
       career.mappu.com -> mappu.com
    ======================================================= */
    const parts = cleanHost.split(".")

    const domain =
      parts.length > 2
        ? parts.slice(-2).join(".")
        : cleanHost

    console.log("🔍 Resolved Domain:", domain)

    /* =======================================================
       FETCH TENANT
    ======================================================= */
    const tenant = await prisma.tenant.findUnique({
      where: {
        domain,
      },
      include: {
        config: true,
      },
    })

    if (!tenant) {
      console.log("❌ Tenant not found for domain:", domain)
      return null
    }

    console.log("✅ Tenant Resolved:", tenant.code)

    return tenant
  } catch (err) {
    console.error("❌ Tenant fetch error:", err)
    return null
  }
}

module.exports = {
  getTenantByDomain,
}