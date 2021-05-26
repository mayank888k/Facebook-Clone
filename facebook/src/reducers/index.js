import { combineReducers } from "redux";
import authReducer from './loginReducer'



const rootReducer = combineReducers({
    authReducer
})

export default rootReducer