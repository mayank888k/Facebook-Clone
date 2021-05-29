import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import "./messengerBody.css";
import CallIcon from "@material-ui/icons/Call";
import VideocamIcon from "@material-ui/icons/Videocam";
import InfoIcon from "@material-ui/icons/Info";
import PhotoIcon from '@material-ui/icons/Photo';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import GifIcon from '@material-ui/icons/Gif';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { NavLink, useParams } from "react-router-dom";
import axios from "../../axios.js";
import Messages from "./Messages";
import Pusher from "pusher-js";


const pusher = new Pusher('67b0ff49cf4886f490dd', {
  cluster: 'ap2'
});

const MessengerBody = () => {

  const conversationId = useParams()
  console.log(conversationId.conversationId)
  const userId = JSON.parse(localStorage.getItem('profile'))?.result?._id
  const [senderMessage, setSenderMessage] = useState("")
  
  const [messages, setMessages] = useState([])

  const scrollRef = useRef();

  const getMessages = async () =>{
    const messagesResponse = await axios.get(`/message/${conversationId.conversationId}`)
    setMessages(messagesResponse?.data)
  }
  useEffect(()=>{
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      getMessages()
    });
    
  },[])
  
  useEffect(()=>{
    getMessages()
  },[conversationId.conversationId])
  
  const sendMessage = async (e) =>{
      e.preventDefault()
      try {
        await axios.post("/message", {
          conversationId: conversationId.conversationId,
          senderId: userId,
          message: senderMessage,
        });
      } catch (error) {
        
      }
      setSenderMessage("")
  }

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
  });

console.log(messages)  
  return (
    <div className="messenger_chatBody">
    <NavLink to="/messenger/asdfasdg">A</NavLink>
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
          {
            messages.map((message)=>(
              <div ref={scrollRef}>
              <Messages senderId={message.senderId} message={message.message} timestamp={message.created_on} />
              </div>
              ))
          }
          
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
            <form onSubmit={sendMessage} >
                <input value={senderMessage} onChange={(e)=>setSenderMessage(e.target.value)} type="text" placeholder="Aa"/>
            </form>
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
