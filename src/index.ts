import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'

dotenv.config()


const PORT = process.env.PORT || 8000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('short'))

// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World 🌍'
  })
})

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})


const getImage = require('./getImage')

app.get('/api/images', (req: Request, res: Response) => {
  var filename = req.query.filename; 
  var widthString = req.query.width; 
  var heightString = req.query.hieght; 
  let width, height
if (widthString) {
  width = parseInt(widthString as string,10)
}
if (heightString) {
  height = parseInt(heightString as string,10)
}
 
  getImage(filename,width,height)
})


// ex: localhost:8000/api/images?filename=santamonica&width=200&height=200



export default app