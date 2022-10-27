import { Request, Response } from "express"
import { readFiles } from "../services/mainService"
import root from 'app-root-path'
import path from 'path'

export const Main = async (req:Request, res:Response) => {
    
    let directory = path.join(root.path, './public/images/photos');
    let filesList = await readFiles(directory);
   
    
    res.render('main', {filesList})
}