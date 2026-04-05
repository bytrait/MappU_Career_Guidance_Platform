const { z } = require('zod');

// ---- Enum for AssessmentType ----
const AssessmentTypeEnum = z.enum(['OCEAN', 'RIASEC','APTITUDE'], {
  required_error: 'assessmentType is required',
  invalid_type_error: 'Invalid assessment type',
});

// ---- GET /questions?assessmentType=&language= ----
const getAssessmentQuestionsSchema = z.object({
  query: z.object({
    assessmentType: AssessmentTypeEnum
  })
});

// ---- POST /score ----
const scoreItemSchema = z.object({
  // userId: z.string().uuid('Invalid UUID format for userId'),
  assessmentType: AssessmentTypeEnum,
  traitOrCategoryCode: z
    .string()
    .trim()
    .min(1, 'traitOrCategoryCode is required'),
  score: z.number().int('Score must be an integer'),
});

const submitScoresSchema = z.object({
  body: z
    .array(scoreItemSchema)
    .nonempty('At least one score item is required'),
});

// ---- Exports ----
module.exports = {
  getAssessmentQuestionsSchema,
  submitScoresSchema,
};
