import { UserService } from "../services/index.js";

export const AdminController = {
  getUsers: async function (req, res) {
    const users = UserService.getUsers();

    return res.send({ data: users });
  },
};
