// import Router from express
import { Router } from "express";
// import category controllers
import {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/client.controller.js";

// import category validators
import {
  validatorCreateClient,
  validatorGetClient,
} from "../validators/client.validator.js";

// create the router
const router = Router();

router
  .get("/client", getItems)
  .get("/client/:id", validatorGetClient, getItem)
  .post("/client", validatorCreateClient, createItem)
  .put("/client/:id", validatorGetClient, validatorCreateClient, updateItem)
  .delete("/client/:id", validatorGetClient, deleteItem);

// export the router
export default router;
