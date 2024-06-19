import { AuthService } from "../services/index.js"

export const AuthController = {
  login: async function (req, res) {
    const user = { name: req.body.username }
    console.log(user)
    const accessToken = AuthService.login(user)
    console.log(accessToken)
    res.send({ message: "Login successfully", data: { accessToken } })
  },

  signUp: async function (req, res) {
    res.send({ data: "User created!" })
  },

  protectedContent: async function (req, res) {
    console.log(req.user)
    res.send({ data: { sensitiveContent: "Lalala", user: req.user } })
  },
}
