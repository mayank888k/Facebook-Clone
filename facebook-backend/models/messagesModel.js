import mongoose from 'mongoose'

const messageSchema = mongoose.Schema({
    conversationId:String,
    senderId:String,
    message:String,
},{ timestamps: { createdAt: 'created_on', updatedAt: 'updated_on' } })

const Messages = mongoose.model('messages',messageSchema)

export default Messages