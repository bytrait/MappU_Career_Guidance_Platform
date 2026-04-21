// src/controllers/schoolPricing.controller.js

const schoolPricingService = require('../services/schoolPricing.service');

const getSchoolPricingList = async (req, res, next) => {
  try {
    const counsellorId = req.user.id;

    const schoolPricingList =
      await schoolPricingService.getSchoolPricingList(
        counsellorId
      );

    return res.status(200).json({
      success: true,
      message: 'School pricing fetched successfully',
      data: schoolPricingList,
    });
  } catch (error) {
    next(error);
  }
};

const createSchoolPricing = async (req, res, next) => {
  try {
    const counsellorId = req.user.id;

    const {
      schoolId,
      schoolName,
      amount,
    } = req.body;

    const schoolPricing =
      await schoolPricingService.createSchoolPricing({
        counsellorId,
        schoolId,
        schoolName,
        amount,
      });

    return res.status(201).json({
      success: true,
      message: 'School pricing created successfully',
      data: schoolPricing,
    });
  } catch (error) {
    next(error);
  }
};

const updateSchoolPricing = async (req, res, next) => {
  try {
    const { id } = req.params;

    const schoolPricing =
      await schoolPricingService.updateSchoolPricing(
        id,
        req.body
      );

    return res.status(200).json({
      success: true,
      message: 'School pricing updated successfully',
      data: schoolPricing,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSchoolPricing = async (req, res, next) => {
  try {
    const { id } = req.params;

    const schoolPricing =
      await schoolPricingService.deleteSchoolPricing(id);

    return res.status(200).json({
      success: true,
      message: 'School pricing deleted successfully',
      data: schoolPricing,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSchoolPricingList,
  createSchoolPricing,
  updateSchoolPricing,
  deleteSchoolPricing,
};