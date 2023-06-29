// import check from express validatoe
import { check } from "express-validator";
// import validateResult from utils/validator.handler.js
import { validateResult } from "../utils/validator.handler.js";

// create validators for createEmployee
export const validatorCreateEmployee = [
  check("idkey")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 10, max: 15 })
    .toUpperCase(),
  check("name").exists().notEmpty().isString().isLength({ min: 3, max: 50 }),
  check("address").exists().notEmpty().isString().isLength({ min: 3, max: 45 }),
  check("phone").exists().notEmpty().isString().isLength({ min: 10, max: 10 }),
  check("idjob").exists().notEmpty().isInt(),
  
  // validates the result data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

// create validators for getEmployee
export const validatorGetEmployee = [
  check("id").exists().notEmpty(),

  // validates the result data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];
