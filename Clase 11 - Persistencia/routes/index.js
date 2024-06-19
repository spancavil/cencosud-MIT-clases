import express from 'express'
import { UserRouter } from './UserRouter.js'
const router = express.Router()

//here we define all different main routes
router.use('/api/users', UserRouter)

export default router