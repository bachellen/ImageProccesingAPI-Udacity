

const sharp = require("sharp");

module.exports = async function resize(fullfilename : string, thumbfilename:string, width:number, height: number) {

   
        try {
            await sharp(fullfilename)
              .resize({
                width: width,
                height: height
              })
              .toFile(thumbfilename);
          } catch (error) {
           return'Fialed to create file'
          }
    

  }

  
  
  