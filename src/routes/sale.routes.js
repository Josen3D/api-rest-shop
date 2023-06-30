// import Router from express
import { Router } from "express";
// import category controllers
import {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/sale.controller.js";

// import category validators
import {
  validatorCreateSale,
  validatorGetSale,
} from "../validators/sale.validator.js";

// create the router
const router = Router();

router
  .get("/sale", getItems)
  .get("/sale/:id", validatorGetSale, getItem)
  .post("/sale", validatorCreateSale, createItem)
  .put("/sale/:id", validatorGetSale, validatorCreateSale, updateItem)
  .delete("/sale/:id", validatorGetSale, deleteItem);

// export the router
export default router;
