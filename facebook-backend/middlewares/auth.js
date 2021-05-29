import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const tokenAuthentication = async (req, res, next) =>{
    try {
        const token = req.header('x-access-token')

        const isCustomToken = token.length < 500

        let decodedData

        if(token && isCustomToken)
        {
            decodedData = jwt.verify(token,process.env.JWT_SECRET)
            
            const userData = await User.findOne({email:decodedData.email})

            req.user = userData
        }
        else{

            decodedData = jwt.decode(token)

            req.user = decodedData
        }
        next()
    } catch (error) {
        res.json({
            message:"You are not auhtenticated"
        })
    }

}

export default tokenAuthentication