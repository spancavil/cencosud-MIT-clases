import fs from "fs"
import { dirname, join } from "path"
import {fileURLToPath} from 'url';

export const UserController = {
  getUser: async function (req, res) {
    // console.log(req);

    //__dirname is a global variable specific to CommonJS modules. It provides the directory path of the current module file.
    //It's only available on COMMONJS !
    // const dirname = path.resolve(__dirname)
    const __filename = fileURLToPath(import.meta.url);
    // console.log({__filename});
    const __dirname = dirname(__filename);
    // console.log({__dirname});

    const pathToFile = join(__dirname, "users.json")
    // console.log({pathToFile});
    let data = fs.readFileSync(pathToFile)

    //Don't forget path resolve
    // let data = fs.readFileSync(pathToFile.replace('file:', ''))
    // console.log(data)
    const dataParsed = JSON.parse(data)
    // console.log(dataParsed)
    res.send({ data: dataParsed })
    // res.send({data: 'data'})
  },

  postUser: async function (req, res) {
    console.log(req.body)
    res.send({ data: "User created!" })
  },
}
