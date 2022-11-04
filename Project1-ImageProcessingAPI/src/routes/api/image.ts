import { Router, Request, Response } from 'express';
import fs from 'fs';
import { validation } from '../../middlewares/validation';
import { resizeImage , getImage} from '../../Utilities/imageHandler'

// ref : https://www.npmjs.com/package/express-api-cache 
var cacheService = require("express-api-cache");
var cache = cacheService.cache;

const routes = Router();
routes.get('/',validation, cache("10 minutes"),async(req: Request, res: Response) =>  {
    const filename = req.query.filename as string;
    const width  = Number(req.query.width) ;
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
      if(isNaN(width) || isNaN(height) ){
        return res.status(404).send('both width and height are required');
      }
      const resutl = await resizeImage(filename, width, height);
     
       if (resutl != null && fs.existsSync(resutl)) {
        return res.sendFile(resutl);
      }
      return res.status(404).send('Image not found');
    }
   
  }) ;

export default routes; 