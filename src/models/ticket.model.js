// import sequelize from database
import { sequelize } from "../database/mysql.js";
import { DataTypes } from "sequelize";

// create the model defining it
const Ticket = sequelize.define(
  "ticket",
  {
    // define model attributes
    consecutive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    subtotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    iva: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    rfc: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
      validate: {
        is: /^([A-Z]){3}([0-9]){6}([A-Z0-9]){3}$/,
      },
    },
    idkey: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
      validate: {
        is: /^([A-Z]){3}([0-9]){6}([A-Z0-9]){3}$/,
      },
    },
  },
  {
    timestamps: false,
  }
);

// export the model
export default Ticket;
