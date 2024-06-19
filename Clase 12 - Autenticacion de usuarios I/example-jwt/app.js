import express from "express"
import router from "./routes/index.js"

import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 5 * 1000, // 5 seconds
	limit: 1, // Limit each IP to 1 requests per `window` (here, per 5 seconds).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

// Apply the rate limiting middleware to all requests.

const port = 8888
const app = express()

//Parse request body as JSON
app.use(express.json())

//Using limiter
app.use(limiter)

// Main route
app.use('/', router)

app.get("/", (req, res) => {
  res.send({message: 'Welcome to our app!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
