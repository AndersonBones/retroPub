import { Request, Response } from "express"
import { readFiles, prices, employees } from "../services/mainService"

export const Main = async (req:Request, res:Response) => {
    
    let directory = './public/images/photos';
    let filesList = await readFiles(directory);
    let Employees  = employees();
    let Prices = prices();
    
    res.render('main', {filesList, Employees, Prices})
}