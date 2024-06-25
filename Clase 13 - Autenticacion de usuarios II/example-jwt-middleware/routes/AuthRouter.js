import { Router } from "express";
import { AuthController } from "../controllers/index.js";
import { authenticateToken } from "../middlewares/authenticate.js";

export const AuthRouter = Router();

AuthRouter.post("/login", AuthController.login);
AuthRouter.post("/signup", AuthController.signUp);
AuthRouter.get("/me", authenticateToken, AuthController.me);
