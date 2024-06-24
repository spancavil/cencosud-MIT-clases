import express from 'express'
import { AuthRouter } from './AuthRouter.js'
const router = express.Router()

//here we define all different main routes
router.use('/auth', AuthRouter)

export default router