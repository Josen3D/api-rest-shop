// import sequelize
import { Sequelize } from "sequelize";

// create env variables to db connection
const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

// create new instance of sequelize
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
});

const dbConect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to mysql");
  } catch (error) {
    console.log("Error connecting to mysql");
  }
};

// export connections
export { sequelize, dbConect };
