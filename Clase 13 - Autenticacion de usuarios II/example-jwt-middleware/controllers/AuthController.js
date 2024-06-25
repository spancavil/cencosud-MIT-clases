import { UserService } from "../services/index.js";

export const AuthController = {
  login: async function (req, res) {
    const user = { username: req.body.username, password: req.body.password };
    console.log(user);

    try {
      const accessToken = await UserService.login(user);
      console.log(accessToken);

      res.send({ message: "Login successfully", data: { accessToken } });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },

  signUp: async function (req, res) {
    const user = {
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
    };
    console.log(user);

    await UserService.create(user);

    res.send({ data: "User created!" });
  },

  me: function (req, res) {
    return res.send({ data: req.user });
  },
};
