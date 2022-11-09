import supertest from 'supertest'
import app from '../index'


const getImage = require('../getImage')
const fs = require("fs"); 
const path = require('path');

// create a request object
const request = supertest(app)

describe('Test endpoint response', () => {
  it('test hello world endpoint', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })
})

describe('Test image processing with sharp', (): void => {
  it('invalid width value', async () => {
    const error: null | string = await getImage(
     'foo',
      -10,
      200
    );
    expect(error).not.toBeNull();
  });

  it('filename does not exsits', async () => {
    const error: null | string = await getImage(
      'foo',
       200,
       200
     );
    expect(error).not.toBeNull();
  });

  it('everting is correct file exsit and valid width and hight ', async () => {
    getImage(
      'encenadaport',
       90,
       90
     )
    await new Promise(resolve => setTimeout(resolve, 1000));
    const workingDir = path.resolve("./");
    const dir_thumb = path.join(workingDir,'/images/thumb');
    const thumbfilename  = `${dir_thumb}/encenadaport-90x90.jpg`
    let flag = checkFileExistsSync(thumbfilename);

    expect(flag).toBeTrue();
  });
});

  function checkFileExistsSync( filepath: string){
    let flag = true;
    try{
      fs.accessSync(filepath, fs.constants.F_OK);
    }catch(e){
      flag = false;
    }
    
    return flag;
  }

