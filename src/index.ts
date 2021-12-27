import express, { Application, Request, Response, NextFunction } from "express"
import helmet from "helmet"
import cors from 'cors'
import * as dotenv from 'dotenv';
import Connect from "./utils/connect"
// env config
dotenv.config();

const app: Application = express()
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "10mb" }));;


app.get('/status', (req:Request, res:Response) => {
    return res.json("hello")
})

let dbUri: string 
if (process.env.NODE_ENV === 'production') {
    dbUri = process.env.PRO_DB!
}
else {
    dbUri = process.env.DEV_DB!
}
Connect({ dbUri })
app.listen(process.env.PORT, () => {


    console.log("APP listen on port " + process.env.PORT)
})
