import express from "express"
import router from "./routes/index.js"

const port = 8888
const app = express()

//Parse request body as JSON
app.use(express.json())

// Main route
// app.use('/', router)

app.get("/home", (req, res) => {
  res.send({message: 'Welcome to our app!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
