const fs =require("fs"); 
const path = require('path');
import express, { Request, Response } from 'express'

const workingDir = path.resolve("./");
const dir_full = path.join(workingDir,'/images/full');
const dir_thumb = path.join(workingDir,'/images/thumb');
const resize = require('./resize');
export default async function getImage(filename : string, width:number,height:number) {
    const fullfilename = `${dir_full}/${filename}.jpg`;
    const thumbfilename = `${dir_thumb}/${filename}-${width}x${height}.jpg`;
    try {

        if (Number.isNaN(height)){
            if (height < 1){
                return 'please type positive height';
            }
            return 'please type valid height';
          }
          if (Number.isNaN(width)){
            if (width < 1){
                return'please type positive width';
            }
            return 'please type valid width';
          }
        if (checkFileExistsSync(fullfilename)){

        
        // console.log(checkFileExistsSync(thumbfilename))
        if(!checkFileExistsSync(thumbfilename)){
        const response = resize(fullfilename,thumbfilename,width,height);
        return response;}
        else {
          return 'File already exsit';
        }}
        else {
          return 'Please provide an exsit file name.'
        }
    } catch (error) {
        return 'Error happend';
    }
  }

  // export default theImage;
  function checkFileExistsSync( filepath: string){
    let flag = true;
    try{
      fs.accessSync(filepath, fs.constants.F_OK);
    }catch(e){
      flag = false;
    }
    return flag;
  }
  
// export {* as getImage};