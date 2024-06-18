import { Router } from "express";
import { UserController } from "../controllers/index.js";

export const UserRouter = Router()

//GET http://localhost:3000/users
UserRouter.get('/', UserController.getUsers)

UserRouter.get('/:id', UserController.getUserById)

//POST http://localhost:3000/users
UserRouter.post('/', UserController.postUser)

//:id means the id it's gonna be the ID of the user
UserRouter.put('/:id', UserController.updateUser)

UserRouter.delete('/:id', UserController.deleteUser)