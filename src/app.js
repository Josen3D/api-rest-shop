// import dotenc config
import "dotenv/config";
// import express
import express from "express";
// import cors
import cors from "cors";

// import Routes
import categoryRoutes from "./routes/category.routes.js";
import productRoutes from "./routes/product.routes.js";
import clientRoutes from "./routes/client.routes.js";
import jobRoutes from "./routes/job.routes.js";
import employeeRoutes from "./routes/employee.routes.js";

// create express app
const app = express();

// use middlewares
app.use(express.json());
app.use(cors());

app
  .use("/api", categoryRoutes)
  .use("/api", productRoutes)
  .use("/api", clientRoutes)
  .use("/api", jobRoutes)
  .use("/api", employeeRoutes);

// if endpoint doesnt exist, send an error message
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

// export express app
export default app;
