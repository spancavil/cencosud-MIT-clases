import { Router } from "express";
import { UserController } from "../controllers/index.js";

export const UserRouter = Router()

UserRouter.get('/', UserController.getUsers)
UserRouter.post('/', UserController.postUser)