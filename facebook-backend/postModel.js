import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    user:String,
    imgName:String,
    text:String,
    avatar:String,
    timestamp:String,
})

const Post = mongoose.model('posts',postSchema)

export default Post