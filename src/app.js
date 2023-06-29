// import dotenc config
import "dotenv/config";
// import express
import express from "express";
// import cors
import cors from "cors";

// import mysql connection
import { dbConect } from "./database/mysql.js";

// import categoryRoutes
import categoryRoutes from "./routes/category.routes.js";
// import product routes
import productRoutes from "./routes/product.routes.js";

// create express app
const app = express();

// use middlewares
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.
use("/api", categoryRoutes)
.use("/api", productRoutes);

// if endpoint doesnt exist, send an error message
app.use((req, res, next) => {
  res.send({
    message: "endpoint not found",
  });
});

// put server to listen
app.listen(PORT, () => console.log("Server running on port:", PORT));
// connect to DB
dbConect();
