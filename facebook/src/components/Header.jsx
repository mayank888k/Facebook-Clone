import React from "react";
import "./header.css";
import logo from "./logo.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Avatar, IconButton, Tooltip } from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "../axios";

const Header = () => {

  const user =JSON.parse(localStorage.getItem('profile'))

  const dispatch = useDispatch()
  const history = useHistory()

  const logout = (e) =>{
    e.preventDefault()
    dispatch({
      type:"LOGOUT"
    })
    history.push('/')
  }

  const profile =async () =>{
      try {
        const userProfile = await axios.get('/account',{
          headers:{
            "x-access-token":JSON.parse(localStorage.getItem('profile')).token
          }
        })
        console.log(userProfile)
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
        <div className="header__input">
          <SearchIcon htmlColor="gray" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__options header__active">
          <HomeIcon htmlColor="gray" />
        </div>
        <div className="header__options">
          <FlagIcon htmlColor="gray" />
        </div>
        <div className="header__options ">
          <SubscriptionsOutlinedIcon htmlColor="gray" />
        </div>
        <div className="header__options">
          <StorefrontOutlinedIcon htmlColor="gray" />
        </div>
        <div className="header__options">
          <AccountCircleOutlinedIcon htmlColor="gray" />
        </div>
      </div>
      <div className="header__right">
        <div className="rightIcons">
          <IconButton size="medium">
            <AddCircleOutlineOutlinedIcon htmlColor="gray" />
          </IconButton>
        </div>
        <div className="rightIcons">
          <IconButton size="medium">
            <NotificationsActiveIcon htmlColor="gray" />
          </IconButton>
        </div>
          <div className="rightIcons">

          <IconButton size="medium">
            <QuestionAnswerIcon htmlColor="gray" />
          </IconButton>
          </div>
        <div className="rightIcons">
          <IconButton onClick={logout} size="medium">
          <Tooltip title="Log Out">
            <ExitToAppIcon htmlColor="gray" />
          </Tooltip>
          </IconButton>
        </div>
        <IconButton onClick={profile}  size="small">
          <Avatar src={user?.result?.imageUrl} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
