// import express app
import app from "./app.js";
// import mysql connection
import { dbConect } from "./database/mysql.js";

const PORT = process.env.PORT || 3000;

// put server to listen
app.listen(PORT, () => console.log("Server running on port: ", PORT));
// connect to mysql DB
dbConect();
