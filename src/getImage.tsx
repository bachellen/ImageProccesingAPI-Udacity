const fs = require("fs"); // Or `import fs from "fs";` with ESM

const dir_full = '/Users/bachalsahali/projects_nodes/images/full';
const dir_thumb = '/Users/bachalsahali/projects_nodes/images/thumb'
const resize = require('./resize')
module.exports = async function getImage(filename : string, width:number,height:number) {
    const fullfilename = `${dir_full}/${filename}.jpg`
    
    try {
        if (Number.isNaN(height)){
            if (height < 1){
              return 'please type valid positive height'
            }
            return 'please type valid positive height'
          }
          if (Number.isNaN(width)){
            if (width < 1){
                return 'please type valid positive width'
            }
            return 'please type valid positive width'
          }
        const thumbfilename = `${dir_thumb}/${filename}-${width}x${height}.jpg`
        await fs.promises.access(fullfilename);
        resize(fullfilename,thumbfilename,width,height)
    } catch (error) {
        return false
    }
  }