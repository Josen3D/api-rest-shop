// import Router from express
import { Router } from "express";
// import category controllers
import { getItems, getItem } from "../controllers/category.controller.js";

// create the router
const router = Router();

router.get("/category", getItems);
router.get("/category/:id", getItem);

// export the router
export default router;
