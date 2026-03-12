//create express app
import exp from 'express'
import {connect} from 'mongoose'
import { productApp } from './API/productAPI.js';
import cookieParser from 'cookie-parser';
import {config} from 'dotenv'

config(); //process.env.port,process.env.dburl

const app=exp();

//add body parser
app.use(exp.json())

//add cookie parser middleware
app.use(cookieParser())
//create port
const port=4000;

//forward req to userapp if path starts with /user-api
app.use("/product-api",productApp)

//connect to DB server
async function connectDB(){
    try{
        
        await connect(process.env.DB_URL)
        
    //start server
        app.listen(port,()=>console.log("server on port 4000..."))
        
        console.log("DB connection is successful")
    }catch(err)
    {
        console.log("error in DB connection:",err)
    }
}
connectDB()

//error handling middleware
app.use((err,req,res,next)=>{
    //validationError
    if(err.name==="ValidationError")
    {
        return res.status(400),json({message:"error occured",error:err.message})
    }
    //CastError
    if(err.name==="CastError")
    {
        return res.status(400),json({message:"error occured",error:err.message})
    }
    //send server side error
    res.status(500).json({message:"error occured",error:err.message})
})
