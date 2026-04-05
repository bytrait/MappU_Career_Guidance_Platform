const fs = require('fs');
const path = require('path');
const prisma = require('../src/utils/prisma.util');

async function main() {
  const filePath = path.join(__dirname, 'seed-data.json');
  const rawData = fs.readFileSync(filePath);
  const seedData = JSON.parse(rawData);

  for (const [type, traits] of Object.entries(seedData)) {
    const assessmentType = type.toUpperCase();

    for (const traitData of traits) {
      const existingTrait = await prisma.assessmentTrait.findFirst({
        where: {
          code: traitData.code,
          assessmentType
        }
      });

      if (!existingTrait) {
        await prisma.assessmentTrait.create({
          data: {
            code: traitData.code,
            name: traitData.name,
            assessmentType,
            questions: {
              create: traitData.questions.map((q, qIndex) => ({
                order: q.order,
                reverse: q.reverse || false,
                timeLimitSeconds: q.timeLimitSeconds || null,
                translations: {
                  create: q.translations.map(t => ({
                    language: t.language,
                    text: t.text
                  }))
                },
                options: q.options
                  ? {
                      create: q.options.map((opt, oIndex) => ({
                        order: oIndex + 1,
                        isCorrect: opt.isCorrect || false,
                        translations: {
                          create: opt.translations.map(t => ({
                            language: t.language,
                            text: t.text
                          }))
                        }
                      }))
                    }
                  : undefined
              }))
            }
          }
        });

        console.log(`✅ Seeded trait: ${traitData.code} (${assessmentType})`);
      } else {
        console.log(`ℹ Trait ${traitData.code} (${assessmentType}) already exists. Skipping...`);
      }
    }
  }

  console.log('🎯 Seeding complete.');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
