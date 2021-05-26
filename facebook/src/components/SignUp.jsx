import React, { useState } from 'react'
import './signup.css'
import fblogo from "./fblogo.png";
import { Button } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import axios from '../axios.js'

const SignUp = () => {

    const history = useHistory()
    const [userData, setUserdata] = useState({
      firstname:"",
      lastname:"",
      email:"",
      password:"",
    })

    const handleChange = (e) =>{

      const {name,value} = e.target
      setUserdata((prevState)=>({
        ...prevState,[name]:value
      }))
    }

    const signUp = async (e) =>{
      e.preventDefault()

      if(!userData.email || !userData.password || !userData.firstname || !userData.lastname)
      {
        window.alert("Fill all the fields")
      }
      else{

        try {
          const userCreated = await axios.post('/signup',userData)
          console.log(userCreated);

          if(userCreated.data.message==="UserExist")
          {
            window.alert("User already exist")
            return
          }
          if(userCreated.data.message==="Type Correct Email"){
            window.alert("Type Correct Email")
            return
          }

          if(userCreated){
            window.alert("Registration Successfull")
            history.push('/')
          }
        } catch (error) {
          console.log(error.message)
        }
      }

      
    }
    return (
      <div className="signUp">
        <div className="fblogo">
          <img src={fblogo} alt="" />
        </div>
        <div className="signUp__details">
          <h1>Create a new account</h1>
          <div className="signUp__username">
            <input
              name="firstname"
              value={userData.firstname}
              onChange={handleChange}
              type="text"
              placeholder="First Name"
            />
            <input
              name="lastname"
              value={userData.lastname}
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="signUp__credential">
            <input
              name="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
            <input
              name="password"
              type="text"
              value={userData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <Button
            onClick={signUp}
            style={{
              padding: "8px 70px",
              borderRadius: "15px",
              marginTop: "10px",
              color: "white",
              backgroundColor: "rgb(26, 230, 26)",
            }}
          >
            Sign Up
          </Button>
          <NavLink exact to="/">
            Already have a account login
          </NavLink>
        </div>
      </div>
    );
}

export default SignUp
