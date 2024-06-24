import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/config.js"

//{email: string, password: string}
const users = []

export const AuthService = {
  login: (email, password) => {
    //Authenticate user

    //1.Find user by email
    const userFound = users.find(user => user.email === email)
    if (!userFound) return null
    //2. Verify the password
    const verifyPassword = userFound.password === password
    if (!verifyPassword) return null
    return jwt.sign({email}, JWT_SECRET, {expiresIn: 3600})
  },
  signUp: (email, password) => {
    const userFound = users.find(user => user.email === email)
    // throw new Error("Error on signup")
    if (userFound) return null
    const userToAdd = {
      email, 
      password,
      id: users.length + 1
    }
    users.push(userToAdd)

    return userToAdd
  }
}
