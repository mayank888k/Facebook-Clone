import express from 'express'
import mongoose from 'mongoose'
import Grid from 'gridfs-stream'
import GridfsStorage from 'multer-gridfs-storage'
import cors from 'cors'
import bodyParser from 'body-parser'
import Pusher from 'pusher'
import './dbConn.js'
import connUrl from './dbConn.js'
import path from 'path'
import multer from 'multer'
import Post from './postModel.js'
import router from './router/imageRouting.js'
import './pusher-realtime.js'
import userRouter from './router/userRouting.js'
import dotenv from 'dotenv'

Grid.mongo = mongoose.mongo

//app config
const app = express()
const port = process.env.PORT || 9000
dotenv.config()


//middlewares
app.use(bodyParser.json())
app.use(cors())
app.use('/',router)
app.use('/',userRouter)


//listener
app.listen(port,()=>{
    console.log(`Listerning to port ${port}`)
})