import express from 'express'
import mongoose from 'mongoose'
import Messages from '../models/messagesModel.js'

const router = express.Router()

router.post('/message', async (req,res)=>{
    console.log(req.body)
    try {
        const message = await Messages.create(req.body)
        console.log(message)
        res.status(201).send(message)
    } catch (error) {
        res.status(500).json({error})
    }
})

router.get('/message/:conversationId', async (req,res)=>{
    try {
        const allMessages = await Messages.find({
            conversationId: req.params.conversationId,
        })
        res.status(200).send(allMessages)
    } catch (error) {
        res.status(500).json({error:error})
    }
})


export default router