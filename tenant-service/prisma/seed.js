/**
 * Seed default ByTrait + MappU tenants.
 *
 * Usage (from career-guidance-platform-main):
 *   node tenant-service/prisma/seed.js
 *
 * Requires TENANT_DATABASE_URL in env / .env
 */
require("dotenv").config({ path: require("path").join(__dirname, "../../.env") });

const { PrismaClient } = require("./generated");

const prisma = new PrismaClient();

async function upsertTenant({ code, name, plan, isDefault, theme, customization }) {
  const existing = await prisma.tenant.findUnique({ where: { code } });

  if (existing) {
    await prisma.tenant.update({
      where: { code },
      data: { name, plan, isDefault, isActive: true },
    });
    await prisma.tenantConfig.upsert({
      where: { tenantId: existing.id },
      create: {
        tenantId: existing.id,
        theme,
        customization,
      },
      update: { theme, customization },
    });
    console.log(`updated tenant: ${code}`);
    return;
  }

  const tenant = await prisma.tenant.create({
    data: {
      code,
      name,
      plan,
      isDefault,
      isActive: true,
      config: {
        create: { theme, customization },
      },
    },
  });
  console.log(`created tenant: ${code} (${tenant.id})`);
}

async function main() {
  await upsertTenant({
    code: "bytrait",
    name: "ByTrait",
    plan: "basic",
    isDefault: true,
    theme: {
      logo: "/logos/bytrait_logo.png",
      favicon: "/favicons/bytrait.svg",
      primaryColor: "#0f172a",
      fromName: "ByTrait",
    },
    customization: {
      displayName: "ByTrait",
      emailFromName: "ByTrait",
      supportEmail: "support@bytrait.com",
    },
  });

  await upsertTenant({
    code: "mappu",
    name: "Mapp My University",
    plan: "advanced",
    isDefault: false,
    theme: {
      logo: "/logos/mappu_logo.png",
      favicon: "/favicons/mappu.png",
      primaryColor: "#012A9E",
      fromName: "MapU",
    },
    customization: {
      displayName: "Mapp My University",
      emailFromName: "MapU",
      supportEmail: "contact@mappmyuniversity.com",
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
