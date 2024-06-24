import { DataTypes } from "sequelize";
import { db } from "../database/connection.js";
import { Product } from "./Product.js";
import { Client } from "./Client.js";

export const ClientProduct = db.define(
  "client_product",
  {
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    timestamps: false,
  }
);

ClientProduct.belongsTo(Product, {
  foreignKey: { allowNull: false, name: "fk_product_id" },
});
ClientProduct.belongsTo(Client, {
  foreignKey: { allowNull: false, name: "fk_client_id" },
});

// ClientProduct.sync();
