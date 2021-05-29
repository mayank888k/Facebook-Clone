import mongoose from 'mongoose'

const chatSchema = mongoose.Schema({
    members: Array,
    recieverName:String
})

const Chats = mongoose.model('chats',chatSchema)

export default Chats