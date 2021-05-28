import React, { useState } from "react";
import "./header.css";
import logo from "./logo.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import {
  Avatar,
  Button,
  IconButton,
  Snackbar,
  Tooltip,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import axios from "../axios";

const Header = ({ active }) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  const [open, setOpen] = useState(false);  //for snackbar notification

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGOUT",
    });
    history.push("/");
  };

  const profile = async () => {
    try {
      const userProfile = await axios.get("/account", {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("profile")).token,
        },
      });
      console.log(userProfile);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNotificationClick = () => {
    setOpen(true);
  };
  const handleNotificationClose = () => {
    setOpen(false);
  };

  return (
    <div className="header">

      <div className="header__left">
        <NavLink exact to="/">
          <img src={logo} alt="" />
        </NavLink>
        <div className="header__input">
          <SearchIcon htmlColor="gray" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__center">
        <NavLink exact to="/">
          <div className={`header__options ${active == "home" && "header__active"} `}>
            <HomeIcon htmlColor="gray" />
          </div>
        </NavLink>

        <NavLink exact to="/pages">
          <div className={`header__options ${active == "pages" && "header__active"}`}>
            <FlagIcon htmlColor="gray" />
          </div>
        </NavLink>
        
        <NavLink exact to="/subscriptions">
        <div className={`header__options ${active == "subscriptions" && "header__active"}`}>
          <SubscriptionsOutlinedIcon htmlColor="gray" />
        </div>
        </NavLink>
        
        <NavLink exact to="/friends">
          <div className={`header__options ${active == "friends" && "header__active"}`}>
            <AccountCircleOutlinedIcon htmlColor="gray" />
          </div>
        </NavLink>
      
      </div>
      
      
      <div className="header__right">
        <div className="rightIcons">
          <IconButton onClick={handleNotificationClick} size="medium">
            <NotificationsActiveIcon htmlColor="gray" />
          </IconButton>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={open}
            onClose={handleNotificationClose}
            message="No Notifications"
            action={
              <>
                <Button
                  color="secondary"
                  size="small"
                  onClick={handleNotificationClose}
                >
                  UNDO
                </Button>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleNotificationClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </>
            }
          />
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
      
        <NavLink exact to="/account">
          <IconButton onClick={profile} size="small">
            <Avatar src={user?.result?.imageUrl} />
          </IconButton>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
