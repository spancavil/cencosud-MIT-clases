import { Router } from "express";
import { authenticateAdminToken } from "../middlewares/authenticate.js";
import { AdminController } from "../controllers/AdminController.js";

export const AdminRouter = Router();

//Define the different sub routes of the main entity. In this case users
AdminRouter.get("/users", authenticateAdminToken, AdminController.getUsers);
