import express from 'express'
import { UserRouter } from './UserRouter.js'

export const router = express.Router()

router.use('/users', UserRouter)