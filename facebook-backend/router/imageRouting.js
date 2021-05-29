import express from 'express'
import mongoose from 'mongoose'
import Grid from 'gridfs-stream'
import GridfsStorage from 'multer-gridfs-storage'
import connUrl from '../dbConn.js'
import path from 'path'
import multer from 'multer'
import Post from '../models/postModel.js'

const router = express.Router()

//DB config for image stream
const conn = mongoose.createConnection(connUrl,{
    useUnifiedTopology: true,
    useNewUrlParser:true,
    useCreateIndex:true,

})

//Setting up gridfsstorage
let gfs

conn.once('open',()=>{
    console.log("DB connected for Image Stream");

    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('images')
})

const storage = new GridfsStorage({
    url:connUrl,
    file: (req,file) =>{
        return new Promise((resolve,reject)=>{
            {
                const filename = `image-${Date.now()}${path.extname(file.originalname)}`

                const fileInfo = {
                    filename: filename,
                    bucketName: 'images'
                }

                resolve(fileInfo)
            }
        })
    }
})

const upload = multer({storage})

//api endpoints
router.get('/', (req,res)=>{
    res.status(200).send("Yoo !!! Express router")
})


//uploading actual image
router.post('/upload/image',upload.any('file'),(req,res)=>{
    console.log(req.files)
    res.status(201).send(req.files)
})

//Uploading Post which contain the name of the image uploaded
router.post('/upload/posts',async (req,res)=>{

    const dbPost = req.body
    try {
        
        const post = await Post.create(dbPost)
        res.status(201).send(post)
    } catch (error) {
        res.status(500).send(error)
    }
})


//Retrieving image by image name from the retrieved post
router.get('/retrieve/image',(req,res)=>{
    gfs.files.findOne({filename:req.query.name},(err,file)=>{
        console.log(req.query.name);
        if(err){
            res.status(500).send(err)
        }
        else{
            if(!file || file.length === 0){
                res.status(404).json({err: "file not found"})
            }else{
                
                const readstream = gfs.createReadStream(file.filename)
                readstream.pipe(res)
            }
        }
    })
})


//Retrieving Post post is the document with name of image we do this first to retrieve image
router.get('/retrieve/posts',(req,res)=>{
    Post.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            data.sort((b,a)=>{
                return a.timestamp -b.timestamp
            })

            res.status(200).send(data)
        }
    })
})

export default router