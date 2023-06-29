// import sequelize from database
import { sequelize } from "../database/mysql.js";
import { DataTypes } from "sequelize";

// create the model defining it
const Employee = sequelize.define(
  "employee",
  {
    // define model attributes
    key: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
      primaryKey: true,
      validate: {
        is: /^([A-Z]){3}([0-9]){6}([A-Z0-9]){3}$/,
      },
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        is: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/,
      },
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false,
      validate: {
        is: /^([0-9]){10}/,
      },
    },
    idjob: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
  },
  {
    timestamps: false,
  }
);

// export the model
export default Employee;
