
import fs from 'fs'
import retroPub from '../models/retroPub'

export const readFiles = async(diretorio:string)=> {
    let filesList = fs.readdirSync(diretorio)

    return filesList;
}


export const employees = () =>{
    return retroPub.employess;
}

export const prices = ()=>{
    return retroPub.prices;
}

export const services = ()=>{
    return retroPub.services;
}