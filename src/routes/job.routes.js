// import Router from express
import { Router } from "express";
// import category controllers
import {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/job.controller.js";

// import category validators
import {
  validatorCreateJob,
  validatorGetJob,
} from "../validators/job.validator.js";

// create the router
const router = Router();

router
  .get("/job", getItems)
  .get("/job/:id", validatorGetJob, getItem)
  .post("/job", validatorCreateJob, createItem)
  .put("/job/:id", validatorGetJob, validatorCreateJob, updateItem)
  .delete("/job/:id", validatorGetJob, deleteItem);

// export the router
export default router;
