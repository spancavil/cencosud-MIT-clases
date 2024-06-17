import express from 'express'
import { router } from './routes/index.js'
const app = express()
const port = 3000

app.use(express.json())

app.use('/', router)

app.get('/home', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Clase 7 - App listening on port ${port}`)
})