import { Router } from "express";
import { UserController } from "../controllers/index.js";

export const UserRouter = Router()

//Define the different sub routes of the main entity. In this case users
UserRouter.get('/', UserController.getUser)
UserRouter.post('/', UserController.postUser)