import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config.js'

export const authenticateToken = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (!token)return res.sendStatus(401)
    
        const payload = jwt.verify(token, JWT_SECRET)
        req.user = payload
        next()
    } catch (error) {
        console.log(error);
        res.sendStatus(403)
    }
}