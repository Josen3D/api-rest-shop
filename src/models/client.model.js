// import sequelize from database
import { sequelize } from "../database/mysql.js";
import { DataTypes } from "sequelize";

// create the model defining it
const Client = sequelize.define(
  "client",
  {
    // define model attributes
    rfc: {
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
    town: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    township: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    postcode: {
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
export default Client;
