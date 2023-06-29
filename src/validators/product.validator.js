// import check from express validatoe
import { check } from "express-validator";
// import validateResult from utils/validator.handler.js
import { validateResult } from "../utils/validator.handler.js";

// create validators for createProduct
export const validatorCreateProduct = [
  check("name").exists().notEmpty().isString().isLength({ min: 3, max: 50 }),
  check("price").exists().notEmpty(),
  check("iva").exists().notEmpty(),
  check("quantity").exists().notEmpty(),
  check("unit").exists().notEmpty().isLength({ min: 3, max: 10 }),
  check("idcategory").exists().notEmpty(),

  // validates the result data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

// create validators for getProduct
export const validatorGetProduct = [
  check("id").exists().notEmpty(),

  // validates the result data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];
