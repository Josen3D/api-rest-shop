// import Router from express
import { Router } from "express";
// import category controllers
import {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/category.controller.js";

// import category validators
import {
  validatorCreateCategory,
  validatorGetCategory,
} from "../validators/category.validator.js";

// create the router
const router = Router();

router
  .get("/category", getItems)
  .get("/category/:id", validatorGetCategory, getItem)
  .post("/category", validatorCreateCategory, createItem)
  .put(
    "/category/:id",
    validatorGetCategory,
    validatorCreateCategory,
    updateItem
  )
  .delete("/category/:id", validatorGetCategory, deleteItem);

// export the router
export default router;
