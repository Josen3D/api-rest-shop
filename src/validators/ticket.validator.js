// import check from express validatoe
import { check } from "express-validator";
// import validateResult from utils/validator.handler.js
import { validateResult } from "../utils/validator.handler.js";

// create validators for createTicket
export const validatorCreateTicket = [
  check("consecutive").exists().notEmpty().isInt().isLength({ min: 3 }),
  check("subtotal").exists().notEmpty(),
  check("iva").exists().notEmpty(),
  check("total").exists().notEmpty(),
  check("rfc")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 10, max: 15 })
    .toUpperCase(),
  check("idkey")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 10, max: 15 })
    .toUpperCase(),

  // validates the result data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

// create validators for getTicket
export const validatorGetTicket = [
  check("id").exists().notEmpty(),

  // validates the result data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];
