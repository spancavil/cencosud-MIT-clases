import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET, SALT_ROUNDS } from "../config/config.js";

const users = [];

export const UserService = {
  login: async (user) => {
    const dbUser = users.find((u) => u.username === user.username);

    if (!dbUser) throw new Error("Invalid credentials");

    const isPasswordValid = await bcrypt.compare(
      user.password,
      dbUser.hashedPassword
    );

    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    return jwt.sign(
      { username: dbUser.username, role: dbUser.role },
      JWT_SECRET
    );
  },
  create: async (user) => {
    const newUser = {
      username: user.username,
      role: user.role,
      hashedPassword: await bcrypt.hash(user.password, SALT_ROUNDS),
    };

    users.push(newUser);

    console.log(users);
  },
  isAdmin: (user) => {
    const dbUser = users.find((u) => u.username === user.username);

    if (!dbUser) throw new Error("No user found");

    return dbUser.role === "admin";
  },
  getUsers: () => {
    return users.map((u) => {
      return {
        username: u.username,
        role: u.role,
      };
    });
  },
};
