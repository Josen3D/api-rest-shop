// import sequelize from database
import { sequelize } from "../database/mysql.js";
import { DataTypes } from "sequelize";

// create the model defining it
const Job = sequelize.define(
  "job",
  {
    // define model attributes
    idjob: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// export the model
export default Job;
