import { DataTypes } from "sequelize";
import { db } from "../database/connection.js";

export const Product = db.define(
  //Sequelize will pluralize the name
  "product",
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    //timestamps are true by default
  }
);

// User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// User.sync({ force: true }) - This creates the table, dropping it first if it already existed
// User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
// Product.sync();

// `sequelize.define` also returns the model
// console.log({isProductClass: Product === db.models.Product}); // true
