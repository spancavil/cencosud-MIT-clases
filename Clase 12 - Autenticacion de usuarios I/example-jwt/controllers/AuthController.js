// import { AuthService } from "../services/index.js"

import { AuthService } from "../services/index.js";

export const AuthController = {
  login: async function (req, res, next) {
    try {
      const { email, password } = req.body;
      const token = AuthService.login(email, password);
      if (!token) res.send({ message: "Email or password is incorrect" });
      else res.send({ message: "Login successfully", token });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  signUp: async function (req, res, next) {
    try {
      const { email, password } = req.body;
      const userCreated = AuthService.signUp(email, password);
      if (!userCreated) {
        res.send({
          message: "User already exists",
        });
      } else {
        res.send({
          message: "Signup successfully",
          data: userCreated,
        });
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  protectedContent: async function (req, res) {},
};
