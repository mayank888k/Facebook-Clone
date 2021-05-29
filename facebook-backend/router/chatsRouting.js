import express from 'express'
import mongoose from 'mongoose'
import Chats from '../models/chatsModel.js'
import User from '../models/userModel.js'

const router = express.Router()

router.post('/chats',async (req,res)=>{

    try {
        console.log(req.body)

        const reciever = await User.findOne({name:req.body.name})
        
console.log(reciever)
        const chat = await Chats.create({
            members:[req.body.senderId, String(reciever._id)],
            recieverName: reciever.name
        })
        res.status(201).send(chat)
    } catch (error) {
        res.status(500).json({
            error:error
        })
    }
})

router.get('/chats/:userId', async (req,res) =>{
    try {
        const chats = await Chats.find({
            members :{$in:[req.params.userId]}
        })
        res.status(200).send(chats)
    } catch (error) {
        res.status(500).json({
            error:error
        })
    }
})

export default router