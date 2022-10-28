
import fs from 'fs'
import * as retroPub from '../models/retroPub'

export const readFiles = async(diretorio:string)=> {

    let filesList = fs.readdirSync(diretorio)

    
    return filesList;
}


export const employees = () =>{
    return retroPub.employees;
}

export const prices = ()=>{
    return retroPub.prices;
}