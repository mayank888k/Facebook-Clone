import React, { useState } from "react";
import "./login.css";
import fblogo from "./fblogo.png";
import googlelogo from "./googlelogo.png";
import { Button } from "@material-ui/core";
import { NavLink, useHistory } from "react-router-dom";
import axios from "../axios";
import GoogleLogin from 'react-google-login';
import {useDispatch} from 'react-redux'


const Login = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const [login, setLogin] = useState({
    email:"",
    password:"",
  })

  const handleChange = (e) =>{
    const {name, value} = e.target

    setLogin((prevState)=>({
      ...prevState,[name]:value
    }))
  }

  const signin = async (e) =>{
    e.preventDefault()

    if(!login.email || !login.password)
    {
      window.alert("Fill all the fields")
      return
    }
    else{
      try {
        const userData = await axios.post('/login',login)

        if(userData.data.message ==="Invalid Credentials")
        {
          window.alert("Invalid Credentials")
          return
        }

        if(userData.data.message ==="No User Exist")
        {
          window.alert("No User Exist Please Sign Up")
          return
        }
        const result = userData.data.result
        const token = userData.data.token
        dispatch({
          type:'AUTH',
          data:{result , token}
        })
        // window.alert("Login Success")
        history.push('/')


      } catch (error) {
        console.log(error.message)
      }
    }
  }

  const onSuccess = async (res) =>{
    const result = res?.profileObj
    const token = res?.tokenId

    try {
        dispatch({
          type:'AUTH',
          data:{result,token}
        })
      } catch (error) {
        console.log(error);
      }
      history.push('/')
  }

  const onFailure = (err) =>{
    console.log(err)
  }

  return (
    <div className="login">
      <div className="fblogo">
        <img src={fblogo} alt="" />
        {/* <img src={logo} alt=""/> */}
      </div>
      <div className="login__details">
        <div className="login__container">
          <h3>Login To Facebook</h3>
          <input
            value={login.email}
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email Address"
          />
          <input
            value={login.password}
            type="text"
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <Button
            style={{
              padding: "8px 70px",
              borderRadius: "15px",
              marginTop: "10px",
              color: "white",
              backgroundColor: "rgb(26, 230, 26)",
            }}
            onClick={signin}
          >
            Sign In
          </Button>
          <GoogleLogin
            clientId="15143884019-26l8b41l5ifi5t7i9b7iptma43adjqhr.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                style={{
                  padding: "8px 23px",
                  borderRadius: "15px",
                  marginTop: "10px",
                  color: "white",
                  backgroundColor: "rgb(30 63 108)",
                }}
              >
               <img src={googlelogo} alt="" />
                Google Sign In
              </Button>
            )}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
          />
           .
          <NavLink exact to="/signup">
            Sign Up To Facebook
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
