// import Router from express
import { Router } from "express";
// import category controllers
import {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/product.controller.js";

// import category validators
import {
  validatorCreateProduct,
  validatorGetProduct,
} from "../validators/product.validator.js";

// create the router
const router = Router();

router
  .get("/product", getItems)
  .get("/product/:id", validatorGetProduct, getItem)
  .post("/product", validatorCreateProduct, createItem)
  .put("/product/:id", validatorGetProduct, validatorCreateProduct, updateItem)
  .delete("/product/:id", validatorGetProduct, deleteItem);

// export the router
export default router;
