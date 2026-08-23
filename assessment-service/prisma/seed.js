const fs = require('fs');
const path = require('path');
const prisma = require('../src/utils/prisma.util');

/**
 * Each file in prisma/seed-data/ maps to one AssessmentType.
 * Filename (without .json) uppercased becomes the assessment type key.
 * e.g. ocean.json → OCEAN, learning.json → LEARNING
 */
const SEED_DATA_DIR = path.join(__dirname, 'seed-data');

const ASSESSMENT_FILE_MAP = {
  ocean: 'OCEAN',
  riasec: 'RIASEC',
  aptitude: 'APTITUDE',
  eq: 'EQ',
  learning: 'LEARNING',
};

function loadSeedData() {
  const seedData = {};

  for (const [fileBase, assessmentType] of Object.entries(ASSESSMENT_FILE_MAP)) {
    const filePath = path.join(SEED_DATA_DIR, `${fileBase}.json`);

    if (!fs.existsSync(filePath)) {
      console.warn(`⚠ Seed file missing, skipping: ${filePath}`);
      continue;
    }

    const traits = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!Array.isArray(traits)) {
      throw new Error(`Seed file must be an array of traits: ${filePath}`);
    }

    seedData[assessmentType] = traits;
  }

  return seedData;
}

async function seedTrait(assessmentType, traitData) {
  const existingTrait = await prisma.assessmentTrait.findFirst({
    where: {
      code: traitData.code,
      assessmentType,
    },
  });

  if (existingTrait) {
    console.log(`ℹ Trait ${traitData.code} (${assessmentType}) already exists. Skipping...`);
    return;
  }

  await prisma.assessmentTrait.create({
    data: {
      code: traitData.code,
      name: traitData.name,
      assessmentType,
      questions: {
        create: traitData.questions.map((q) => ({
          order: q.order,
          reverse: q.reverse || false,
          timeLimitSeconds: q.timeLimitSeconds || null,
          translations: {
            create: q.translations.map((t) => ({
              language: t.language,
              text: t.text,
            })),
          },
          options: q.options
            ? {
                create: q.options.map((opt, oIndex) => ({
                  order: oIndex + 1,
                  isCorrect: opt.isCorrect || false,
                  translations: {
                    create: opt.translations.map((t) => ({
                      language: t.language,
                      text: t.text,
                    })),
                  },
                })),
              }
            : undefined,
        })),
      },
    },
  });

  console.log(`✅ Seeded trait: ${traitData.code} (${assessmentType})`);
}

async function main() {
  const seedData = loadSeedData();

  for (const [assessmentType, traits] of Object.entries(seedData)) {
    console.log(`\n—— Seeding ${assessmentType} (${traits.length} traits) ——`);
    for (const traitData of traits) {
      await seedTrait(assessmentType, traitData);
    }
  }

  console.log('\n🎯 Seeding complete.');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
