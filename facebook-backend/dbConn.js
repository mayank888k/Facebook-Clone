import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connUrl = process.env.MONGO_URL


mongoose.connect(connUrl,{
    useUnifiedTopology: true, 
    useNewUrlParser:true,
    useCreateIndex:true,

}).then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log("DD not Connected",err)
})

export default connUrl