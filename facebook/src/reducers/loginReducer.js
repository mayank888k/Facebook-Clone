import {AUTH , LOGOUT} from '../actions/actionTypes'

const initialState = {
    authData:null
}

const authReducer = (state={initialState},action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile',JSON.stringify(action?.data))
            return {...state,authData:action?.data}
        case LOGOUT:
            localStorage.removeItem('profile')
            return {...state,authData:null}
    
        default:
           return state
    }
}

export default authReducer