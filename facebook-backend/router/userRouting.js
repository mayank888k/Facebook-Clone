import express from 'express'
import mongoose from 'mongoose'
import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import tokenAuthentication from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/signup',async (req,res)=>{
    try {
        let {email,firstname,lastname,password} = req.body

        const userexist = await User.findOne({email})

        if(!userexist)
        {

            password = await bcrypt.hash(password,10)
    
            const user = await User.create({email,firstname,lastname,password,name:`${firstname} ${lastname}`})
    
            res.status(201).send(user)
        }
        else{
            res.json({
                message:"UserExist"
            })
        }
    } catch (error) {
        if(error.message==="users validation failed: email: Not a valid Email"){
            res.json({
                message:"Type Correct Email"
            })
        }
       else{
           res.json({
               error:error.message
           })
    }
    }
})

userRouter.post('/login',async (req,res)=>{
    try {
        const {email, password} = req.body
        const userData = await User.findOne({email})
        if(userData)
        {
            const compare = await bcrypt.compare(password,userData.password)
            
            if(compare){

                const token = jwt.sign({email, id:userData._id},process.env.JWT_SECRET)
                res.status(200).json({
                    result:userData,
                    token
                })
            }
            else{
                res.json({
                    message:"Invalid Credentials"
                })
            }

        }
        else{
            res.json({
                message:"No User Exist"
            })
        }
    } catch (error) {
        res.json({
            message:error.message
        })
    }
})

userRouter.get('/account',tokenAuthentication, (req,res)=>{
    console.log("i am authenticated")
    try {
        res.send(req.user)
    } catch (error) {
        console.log(error);
    }
})

export default userRouter