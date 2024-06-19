import { Client } from "../models/Client.js";
import { ClientProduct } from "../models/ClientProduct.js";
import { Product } from "../models/Product.js";
import { db } from "./connection.js";

export const authenticate = async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");

    await db.sync();

    //Creating client test
    const client1 = await Client.create({
      firstName: "Luciano",
      lastName: "Serruya",
    });
    console.log(client1.dataValues);

    //Creating product test
    const product1 = await Product.create({ title: "Jabon de tocador" });
    console.log(product1.dataValues);

    //Creating clientProduct and get it

    await ClientProduct.create({
      client: client1,
      product: product1,
      quantity: 3,
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
