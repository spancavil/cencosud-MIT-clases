import { Router } from "express";
import { AuthController } from "../controllers/index.js";

export const AuthRouter = Router()

//Define the different sub routes of the main entity. In this case users
AuthRouter.post('/login', AuthController.login)
AuthRouter.post('/signup', AuthController.signUp)