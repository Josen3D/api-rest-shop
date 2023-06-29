// import check from express validatoe
import { check } from "express-validator";
// import validateResult from utils/validator.handler.js
import { validateResult } from "../utils/validator.handler.js";

// create validators for createJob
export const validatorCreateJob = [
  check("description")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 100 }),

  // validates the result data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

// create validators for getJob
export const validatorGetJob = [
  check("id").exists().notEmpty(),

  // validates the result data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];
