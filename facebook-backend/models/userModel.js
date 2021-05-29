import mongoose from 'mongoose'
import validator from 'validator'

const userSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    name:{
        type:String,
    },
    imageUrl:{
        type:String,
        default:"a"
    },
   
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Not a valid Email")
            }
        }
    },
   
    password:{
        type:String,
        required:true
    },
   
})

const User = mongoose.model('users',userSchema)

export default User