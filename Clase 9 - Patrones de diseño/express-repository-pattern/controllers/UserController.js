import fs from "fs"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const users = []
export const UserController = {
  
  //Req = request; res = response
  getUsers: async function (req, res) {
    console.log(req)

    // __dirname is a global variable specific to CommonJS modules. It provides the directory path of the current module file.
    // It's only available on COMMONJS !
    const __filename = fileURLToPath(import.meta.url)
    // console.log({__filename});
    const __dirname = dirname(__filename)
    // console.log({__dirname});
    const pathToFile = join(__dirname, "users.json")
    console.log({pathToFile});

    let dataInBytes = fs.readFileSync(pathToFile)
    console.log(dataInBytes)
    const dataParsed = JSON.parse(dataInBytes)
    console.log(dataParsed)
    res.send({ data: dataParsed })
  },

  postUser: async function (req, res) {
    // console.log(req.body)
    // res.send({ data: "User created!" })
  },
}