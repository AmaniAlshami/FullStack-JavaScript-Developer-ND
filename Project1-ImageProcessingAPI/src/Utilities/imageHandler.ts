import path from 'path';

const sharp = require('sharp');

// Resizing the image and save it in Thumbnails folder.
 export async function resizeImage(filename : string, width : number, height: number) {

  try {

    const imagePath = getImage(filename);

    await sharp(imagePath)
        .png()
        .resize({
          width: width,
          height: height
        })
        .toFile(`./assets/thumbnails/${filename}_${width}_${height}.png`)
        .then(()=>  console.log('success'))
        
        
        return path.join(__dirname,'../../assets/thumbnails/',`${filename}_${width}_${height}.png`);
  } 
  catch (error) {
    console.log(error)

  }
  
  }
  
// Get image by filename
export function getImage(filename : string){

  const imagePath = path.join(
    __dirname,
    '../../assets/images',
    `${filename}.png`
  );
  
  return imagePath;
} 
