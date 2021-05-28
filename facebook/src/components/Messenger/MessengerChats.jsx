import React from 'react'
import './messengerChats.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar, IconButton } from '@material-ui/core';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import EditIcon from '@material-ui/icons/Edit';

const MessengerChats = () => {
    return (
      <div className="messenger_chats">
        <div className="messenger_chatsHead">
          <h1>Chats</h1>
          <div className="chatHead__icons">
            <IconButton
              style={{
                backgroundColor: "lightgray",
                padding: "8px",
                margin: "3px",
              }}
            >
              <MoreHorizIcon htmlColor="black" />
            </IconButton>
            <IconButton
              style={{
                backgroundColor: "lightgray",
                padding: "8px",
                margin: "3px",
              }}
            >
              <VideoCallIcon htmlColor="black" />
            </IconButton>
            <IconButton
              style={{
                backgroundColor: "lightgray",
                padding: "8px",
                margin: "3px",
              }}
            >
              <EditIcon htmlColor="black" />
            </IconButton>
          </div>
        </div>

        <div className="chat_search">
          <input type="text" placeholder="Search Chats" />
        </div>

        <div className="chats">
          <div className="chat">
            <Avatar style={{height:"50px", width:"50px"}} />
            <div className="chatDetails">
              <h3>Name</h3>
              <p>Last Message</p>
            </div>
          </div>
          <div className="chat">
            <Avatar style={{height:"50px", width:"50px"}} />
            <div className="chatDetails">
              <h3>Name</h3>
              <p>Last Message</p>
            </div>
          </div>
          <div className="chat">
            <Avatar style={{height:"50px", width:"50px"}} />
            <div className="chatDetails">
              <h3>Name</h3>
              <p>Last Message</p>
            </div>
          </div>
          <div className="chat">
            <Avatar style={{height:"50px", width:"50px"}} />
            <div className="chatDetails">
              <h3>Name</h3>
              <p>Last Message</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MessengerChats
