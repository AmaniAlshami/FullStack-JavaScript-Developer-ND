import { Router, Request, Response } from 'express';
import fs from 'fs';
import { validation } from '../../middlewares/validation';
import { resizeImage , getImage} from '../../Utilities/imageHandler'

const routes = Router();
routes.get('/',validation, async(req: Request, res: Response) =>  {
    const filename = req.query.filename as string;
    const width   = Number(req.query.width) ;
    const height = Number(req.query.height) ;

    // if only filename show the Original one
    if(isNaN(width) && isNaN(height))
     {
      
      const imagePath = getImage(filename)
      if (fs.existsSync(imagePath)) {
        return res.sendFile(imagePath);
      }
      return res.status(404).send('Image not found');
    }
    else
     // if provide a width and hight
    // call a function to resize the image and save them in new folder to use in coming request with same size 
    {
      const resutl = await resizeImage(filename, width, height );
     
       if (resutl != null && fs.existsSync(resutl)) {
        return res.sendFile(resutl);
      }
      return res.status(404).send('Image not found');
    }
   
  }) ;

export default routes; 