
import fs from 'fs'

export const readFiles = async(diretorio:string)=> {

    let filesList = fs.readdirSync(diretorio)

    
    return filesList;
}

