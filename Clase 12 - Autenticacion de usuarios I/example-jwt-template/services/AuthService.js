import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config.js'

export const AuthService = {
    login: (user) => {
        return jwt.sign(user, JWT_SECRET)
    }
}