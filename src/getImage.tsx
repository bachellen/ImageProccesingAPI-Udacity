const fs = require("fs"); // Or `import fs from "fs";` with ESM

const dir_full = '/Users/bachalsahali/projects_nodes/images/full';
const dir_thumb = '/Users/bachalsahali/projects_nodes/images/thumb'
const resize = require('./resize')
module.exports = async function getImage(filename : string, width:number,height:number) {
    const fullfilename = `${dir_full}/${filename}.jpg`
    const thumbfilename = `${dir_full}/${filename}-${width}x${height}.jpg`
    try {
        await fs.promises.access(fullfilename);
        resize(fullfilename,thumbfilename,width,height)
    } catch (error) {
        return false
    }
  }