import { Router } from "express";
import { AuthController } from "../controllers/index.js";
import { authenticateToken } from "../middlewares/authenticate.js";

export const AuthRouter = Router()

//Define the different sub routes of the main entity. In this case users
AuthRouter.post('/login', AuthController.login)
AuthRouter.post('/signup', AuthController.signUp)
AuthRouter.get('/protected/content', authenticateToken, AuthController.protectedContent)