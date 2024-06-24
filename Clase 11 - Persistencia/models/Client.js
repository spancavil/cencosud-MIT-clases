import { DataTypes } from "sequelize";
import { db } from "../database/connection.js";

export const Client = db.define(
  //Sequelize will pluralize the name
  "client",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    //timestamps are true by default
    timestamps: true,
    createdAt: false,
    updatedAt: "clientLastUpdated",
  }
);

// User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// User.sync({ force: true }) - This creates the table, dropping it first if it already existed
// User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
// Client.sync();

// `sequelize.define` also returns the model
// console.log({ isClientClassCorrect: Client === db.models.Client }); // true
