const assessmentService = require('../services/assessment.service');
const logger = require('../utils/logger.util');

const getQuestions = async (req, res, next) => {
  try {
    const { assessmentType } = req.query;

    const traits = await assessmentService.getQuestionsByTypeAndLanguage(assessmentType.toUpperCase());

    let formatted;

    if (assessmentType.toUpperCase() === 'APTITUDE') {
      // Flatten questions and include options
      formatted = traits.flatMap((trait) =>
        trait.questions.map((q) => ({
          id: q.id,
          order: q.order,
          trait: {
            id: trait.id,
            code: trait.code,
            name: trait.name,
          },
          text: mapTranslations(q.translations),
          options: q.options.map((opt) => ({
            id: opt.id,
            text: mapTranslations(opt.translations),
            isCorrect: opt.isCorrect, 
          })),
        }))
      );
    } else {
      // Keep OCEAN & RIASEC structure
      formatted = traits.map((trait) => ({
        id: trait.id,
        code: trait.code,
        name: trait.name,
        questions: trait.questions.map((q) => ({
          id: q.id,
          order: q.order,
          reverse: q.reverse,
          text: mapTranslations(q.translations),
        })),
      }));
    }

    res.status(200).json({
      success: true,
      data: formatted,
    });
  } catch (err) {
    logger?.error('[AssessmentController] Failed to get questions:', err);
    next(err);
  }
};


const saveAssessmentScores = async (req, res, next) => {
  try {
    const userId  = req.user.id;
    const scores = req.body;

    const result = await assessmentService.saveAssessmentScores(scores,userId);

    res.status(200).json({
      success: true,
      message: 'Scores submitted successfully',
      data: result,
    });
  } catch (err) {
    req.logger?.error('[AssessmentController] Failed to save scores:', err);
    next(err);
  }
};

const getAssessmentScoresByUserId = async (req,res,next)=>{
  try{
    const userId = req.user.id;
    const result = await assessmentService.getAssessmentScoresByUserId(userId);
    res.status(200).json({
      success:true,
      data:result,
    });
  }catch(err){
    req.logger?.error('[AssessmentController] Failed to get scores:', err);
    next(err);
  }
}

function mapTranslations(translations) {
  const obj = {};
  translations.forEach(tr => {
    if (tr.language && tr.text) obj[tr.language] = tr.text;
  });
  return obj;
}

const getAssessmentScoresForStudent = async (req, res, next) => {
  try {
    const { studentId } = req.params;

    const result =
      await assessmentService.getAssessmentScoresByUserId(studentId);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    req.logger?.error(
      '[AssessmentController] Counsellor get scores failed:',
      err
    );
    next(err);
  }
};


module.exports = {
  getQuestions,
  saveAssessmentScores,
  getAssessmentScoresByUserId,
  getAssessmentScoresForStudent,
};