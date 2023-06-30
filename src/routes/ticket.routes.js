// import Router from express
import { Router } from "express";
// import category controllers
import {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/ticket.controller.js";

// import category validators
import {
  validatorCreateTicket,
  validatorGetTicket,
} from "../validators/ticket.validator.js";

// create the router
const router = Router();

router
  .get("/ticket", getItems)
  .get("/ticket/:id", validatorGetTicket, getItem)
  .post("/ticket", validatorCreateTicket, createItem)
  .put("/ticket/:id", validatorGetTicket, validatorCreateTicket, updateItem)
  .delete("/ticket/:id", validatorGetTicket, deleteItem);

// export the router
export default router;
