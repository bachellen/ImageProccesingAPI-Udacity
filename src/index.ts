import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import getImage from './getImage'

const fs = require("fs"); 
let alert =require("alert"); 
dotenv.config()
const path = require('path');

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


// const getImage = require('./getImage');
const workingDir = path.resolve("./");
const dir_full = path.join(workingDir,'/images/full');
const thumb_dir = path.join(workingDir,'/images/thumb');
app.get('/api/images',  async (req: Request, res: Response) => {
  var filename = req.query.filename; 
  var widthString = req.query.width; 
  var heightString = req.query.height; 
  let width: number, height: number;
if (widthString) {
  width = parseInt(widthString as string,10);
}
if (heightString) {
  height = parseInt(heightString as string,10);
}
fs.access(`${dir_full}/${filename}.jpg`,  fs.constants.R_OK , async (err: any) =>{
  if(err){
     
      alert("Sorry! File name is not avalible")
      return false;
  }
  const response = await getImage(String(filename),width,height);
 
  if (response == `${thumb_dir}/${filename}-${width}x${height}.jpg`) {
    res.sendFile(response);
  }else {
    res.send(response)
  }
  // getImage(filename,width,height);
  // res.sendFile(`${dir_full}/${filename}.jpg`);
      return true;
  
});

})


// ex: localhost:8000/api/images?filename=santamonica&width=200&height=200



export default app;