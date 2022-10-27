import express,{Request, Response} from 'express'
import dotenv from 'dotenv'
import path from 'path'
import routes from './routes/index'
import cors from 'cors'

dotenv.config();
const app = express();

app.use(cors())

// set static files
app.use(express.static(path.join(__dirname, '../public')))

// set template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(routes);

app.use((req:Request, res:Response)=>{
    res.render('404')
})

app.listen(process.env.PORT || 3000)