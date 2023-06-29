// import Router from express
import { Router } from "express";
// import category controllers
import {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/employee.controller.js";

// import category validators
import {
  validatorCreateEmployee,
  validatorGetEmployee,
} from "../validators/employee.validator.js";

// create the router
const router = Router();

router
  .get("/employee", getItems)
  .get("/employee/:id", validatorGetEmployee, getItem)
  .post("/employee", validatorCreateEmployee, createItem)
  .put(
    "/employee/:id",
    validatorGetEmployee,
    validatorCreateEmployee,
    updateItem
  )
  .delete("/employee/:id", validatorGetEmployee, deleteItem);

// export the router
export default router;
