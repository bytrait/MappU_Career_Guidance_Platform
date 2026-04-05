// src/controllers/preference.controller.js

const { upsertPreference,getPreference } = require('../services/preference.service');

async function setPreference(req, res) {
  try {
    const userId = req.user.id; // comes from JWT auth middleware
    const { preferredLanguage, economicStatus } = req.body;

    if (!preferredLanguage || !economicStatus) {
      return res.status(400).json({ message: 'preferredLanguage and economicStatus are required' });
    }

    const pref = await upsertPreference(userId, preferredLanguage, economicStatus);
    return res.json(pref);
  } catch (err) {
    console.error('setPreference error:', err);
    return res.status(500).json({ message: 'Failed to save preference' });
  }
}


async function getPreferenceController(req, res) {
  try {
    const userId = req.user.id; // comes from JWT auth middleware
    const pref = await getPreference(userId);
    return res.json(pref);
  } catch (err) {
    console.error('getPreference error:', err);
    return res.status(500).json({ message: 'Failed to get preference' });
  }
}

const getPreferenceForStudent = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const pref =
      await getPreference(studentId);

    res.status(200).json({
      success: true,
      data: pref,
    });
  } catch (err) {
    req.logger?.error(
      '[PreferenceController] Counsellor get preference failed:',
      err
    );
    next(err);
  }
};


module.exports = {
  setPreference,
  getPreferenceController,
  getPreferenceForStudent
};
