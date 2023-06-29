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
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        is: /^[a-zA-Z]\s$/,
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
      type: DataTypes.TINYINT,
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
