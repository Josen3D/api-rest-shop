// import check from express validatoe
import { check } from "express-validator";
// import validateResult from utils/validator.handler.js
import { validateResult } from "../utils/validator.handler.js";

// create validators for createClient
export const validatorCreateClient = [
  check("rfc")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 10, max: 15 })
    .toUpperCase(),
  check("name").exists().notEmpty().isString().isLength({ min: 3, max: 50 }),
  check("address").exists().notEmpty().isString().isLength({ min: 3, max: 45 }),
  check("town").exists().notEmpty().isString().isLength({ min: 3, max: 40 }),
  check("township")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 40 }),
  check("state").exists().notEmpty().isString().isLength({ min: 3, max: 40 }),
  check("postcode").exists().notEmpty().isInt().isLength({ min: 5, max: 5 }),

  // validates the result data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

// create validators for getClient
export const validatorGetClient = [
  check("id").exists().notEmpty(),

  // validates the result data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];
