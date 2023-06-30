// import check from express validatoe
import { check } from "express-validator";
// import validateResult from utils/validator.handler.js
import { validateResult } from "../utils/validator.handler.js";

// create validators for createSale
export const validatorCreateSale = [
  check("code").exists().notEmpty().isInt(),
  check("consecutive").exists().notEmpty().isInt().isLength({ min: 3 }),
  check("quantity").exists().notEmpty().isInt(),
  check("unitaty").exists().notEmpty(),
  check("subtotal").exists().notEmpty(),
  check("iva").exists().notEmpty(),
  check("total").exists().notEmpty(),

  // validates the result data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

// create validators for getSale
export const validatorGetSale = [
  check("id").exists().notEmpty(),

  // validates the result data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];
