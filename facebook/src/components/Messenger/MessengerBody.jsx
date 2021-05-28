import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./messengerBody.css";
import CallIcon from "@material-ui/icons/Call";
import VideocamIcon from "@material-ui/icons/Videocam";
import InfoIcon from "@material-ui/icons/Info";
import PhotoIcon from '@material-ui/icons/Photo';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import GifIcon from '@material-ui/icons/Gif';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const MessengerBody = () => {
  return (
    <div className="messenger_chatBody">
      <div className="body__head">
        <Avatar style={{ height: "40px", width: "40px" }} />
        <div className="chat_name">
          <h3>Name</h3>
        </div>
        <div className="chathead__icons">
          <IconButton>
            <CallIcon htmlColor="#2e81f4" />
          </IconButton>
          <IconButton>
            <VideocamIcon htmlColor="#2e81f4" />
          </IconButton>
          <IconButton>
            <InfoIcon htmlColor="#2e81f4" />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
          <div className="chat_message ">
          <Avatar className="" style={{ height: "20px", width: "20px" }} />
          <div className="chat_messageText ">
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          </div>
          
      </div>

      <div className="chat__bottum">
            <div className="chat__bottumIcons">
                <IconButton style={{padding:"2px"}}>
                    <AddCircleIcon htmlColor="#2e81f4" />
                </IconButton>
                <IconButton style={{padding:"2px"}}>
                    <PhotoIcon htmlColor="#2e81f4" />
                </IconButton>
                <IconButton style={{padding:"2px"}}>
                    <EmojiEmotionsIcon htmlColor="#2e81f4" />
                </IconButton>
                <IconButton style={{padding:"2px"}}>
                    <GifIcon style={{backgroundColor:"#2e81f4", borderRadius:"20px"}} htmlColor="white" />
                </IconButton>
            </div>

            <div className="chat__bottumInput">
                <input type="text" placeholder="Aa"/>
            </div>
            <div className="chat__bottomRightIcon">
            <IconButton style={{padding:"2px"}}>
                    <ThumbUpAltIcon htmlColor="#2e81f4" />
                </IconButton>
            </div>
      </div>
    </div>
  );
};

export default MessengerBody;
