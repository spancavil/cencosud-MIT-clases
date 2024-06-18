import express from 'express'
import { UserRouter } from './UserRouter.js'

export const router = express.Router()

//http://localhost:3000/users
router.use('/users', UserRouter)