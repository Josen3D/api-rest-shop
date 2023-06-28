// import sequelize from database
import { sequelize } from "../database/mysql.js";
import { DataTypes } from "sequelize";

// create the model defining it
const Category = sequelize.define(
  "category",
  {
    // define model attributes
    idcategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    abbreviation: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// export the model
export default Category;
