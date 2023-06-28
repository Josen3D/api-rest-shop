// import check from express validatoe
import { check } from "express-validator";
// import validateResult from utils/validator.handler.js
import { validateResult } from "../utils/validator.handler.js";

// create validators for createCategory
export const validatorCreateCategory = [
  check("description").exists().notEmpty().isLength({ min: 3, max: 50 }),
  check("abbreviation").exists().notEmpty().isLength({ min: 2, max: 8 }),

  // validates the result data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

// create validators for getCategory
export const validatorGetCategory = [
  check("id").exists().notEmpty(),

  // validates the result data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];
