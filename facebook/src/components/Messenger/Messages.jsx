import { Avatar } from "@material-ui/core";
import { format } from "timeago.js";
import React from "react";
import "./messages.css";

const Messages = ({ message, senderId, timestamp }) => {
  const user = JSON.parse(localStorage.getItem("profile"))?.result;
  return (
    <div className={`chat_message ${user?._id === senderId && "chat_messageOwn"}`}>
      <div>
        <Avatar src={user?.imageUrl} style={{ height: "20px", width: "20px" }} />
        <div className={`chat_messageText ${user?._id === senderId && "chat_messageTextOwn"} `}>
          <p>{message}</p>
        </div>
      </div>
      <h6>{format(timestamp)}</h6>
    </div>
  );
};

export default Messages;
