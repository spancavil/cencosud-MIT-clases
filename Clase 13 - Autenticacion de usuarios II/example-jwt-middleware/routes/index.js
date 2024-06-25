import express from "express";
import { AuthRouter } from "./AuthRouter.js";
import { AdminRouter } from "./AdminRouter.js";

const router = express.Router();

//here we define all different main routes
router.use("/api/auth", AuthRouter);

router.use("/api/admin", AdminRouter);

export default router;
