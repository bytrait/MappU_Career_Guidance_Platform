const { z } = require("zod");

const preferenceSchema = z.object({
    body: z.object({
      preferredLanguage: z.enum(['en', 'mr']),
      economicStatus: z.enum(['stable', 'weak']),
    })
  });
  
module.exports = {
    preferenceSchema
}
