const fs =require("fs"); 
const path = require('path');


const workingDir = path.resolve("./");
const dir_full = path.join(workingDir,'/images/full');
// const dir_full = '/Users/bachalsahali/projects_nodes/images/full';
// const dir_thumb = '/Users/bachalsahali/projects_nodes/images/thumb';
const dir_thumb = path.join(workingDir,'/images/thumb');
const resize = require('./resize');
module.exports = async function getImage(filename : string, width:number,height:number) {
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
        // console.log(checkFileExistsSync(thumbfilename))
        if(!checkFileExistsSync(thumbfilename)){
        resize(fullfilename,thumbfilename,width,height);}
    } catch (error) {
        return false;
    }
  }

  
  function checkFileExistsSync( filepath: string){
    let flag = true;
    try{
      fs.accessSync(filepath, fs.constants.F_OK);
    }catch(e){
      flag = false;
    }
    return flag;
  }
  