import fs from "fs"
import { dirname, join } from "path"
import { fileURLToPath } from "url"
import { UserRepository } from "../repository/index.js"

const users = []
export const UserController = {
  //Req = request; res = response
  getUsers: async function (req, res) {    
    // __dirname is a global variable specific to CommonJS modules. It provides the directory path of the current module file.
    // It's only available on COMMONJS !
    // const __filename = fileURLToPath(import.meta.url)
    // // console.log({__filename});
    // const __dirname = dirname(__filename)
    // // console.log({__dirname});
    // const pathToFile = join(__dirname, "users.json")
    // console.log({ pathToFile })

    // let dataInBytes = fs.readFileSync(pathToFile)
    // console.log(dataInBytes)
    // const dataParsed = JSON.parse(dataInBytes)
    // console.log(dataParsed)
    // res.send({ data: dataParsed })

    const users = await UserRepository.getUsers()
    console.log(users);
    res.send(users)
  },

  getUserById: async function (req, res) {
    res.send("Get user by id")
  },

  postUser: async function (req, res) {
    console.log(req.body)

    //Destructuring req.body
    const {name} = req.body
    const userCreated = await UserRepository.postUser(name)
    res.send({ data: userCreated })
  },

  updateUser: async function (req, res) {
    res.send("User updated")
  },

  deleteUser: async function (req, res) {
    res.send("User deleted")
  },
}
