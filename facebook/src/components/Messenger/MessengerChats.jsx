import React, { useEffect, useState } from 'react'
import './messengerChats.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar, IconButton } from '@material-ui/core';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import EditIcon from '@material-ui/icons/Edit';
import Conversation from './Conversation';

import { NavLink } from 'react-router-dom';
import axios from '../../axios.js';

const MessengerChats = () => {

  const userId = JSON.parse(localStorage.getItem('profile'))?.result?._id

  const user = JSON.parse(localStorage.getItem('profile'))?.result
  const [conversation, setConversation] = useState({
      data:[]
  })

  const getConversation = async () => {
        const chats = await axios.get(`/chats/${user?._id}`)
        setConversation(chats)
    }
    useEffect(()=>{

        getConversation()
    },[])

  const addChat = async () =>{
      try {

        const freind_name = window.prompt("Enter Name of Your Freind")
        const chatAdd = await axios.post('/chats',{
          name:freind_name,
          senderId: userId
        })
      } catch (error) {
        
      }
  }

  

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
              onClick={addChat}
            >
              <EditIcon htmlColor="black" />
            </IconButton>
          </div>
        </div>

        <div className="chat_search">
          <input type="text" placeholder="Search Chats" />
        </div>

        {conversation?.data?.map((chat) => (
          
        <NavLink exact to={`/messenger/${chat._id}`}>
          <Conversation conversationId={chat._id} recieverName ={chat.recieverName} />
        </NavLink>    
          ))}
        
          
          
    
      </div>
    );
}

export default MessengerChats
