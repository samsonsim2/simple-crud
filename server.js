import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'
const __dirname = dirname(fileURLToPath(import.meta.url))
import connectDB from './db/connect.js'
import taskRouter from './routes/taskRoutes.js'
const app = express()
app.use(express.static(path.resolve(__dirname, './client/build')))
app.use(express.json())

app.use('/api/v1', taskRouter)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})
const port = process.env.PORT || 5000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
