import { Request, Response } from "express"
import { readFiles, prices, employees, services } from "../services/mainService"

export const Main = async (req:Request, res:Response) => {
    
    let directory = './public/images/photos';
    let filesList = await readFiles(directory);
    let Employees  = employees();
    let Prices = prices();
    let Services = services();

    res.render('main', {filesList, Services, Employees, Prices})
}