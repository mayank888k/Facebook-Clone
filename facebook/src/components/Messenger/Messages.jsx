import { Avatar } from "@material-ui/core";
import { format } from "timeago.js";
import React from "react";
import "./messages.css";

const Messages = ({ message, senderId, timestamp }) => {
  const userId = JSON.parse(localStorage.getItem("profile"))?.result?._id;
  return (
    <div className={`chat_message ${userId === senderId && "chat_messageOwn"}`}>
      <div>
        <Avatar style={{ height: "20px", width: "20px" }} />
        <div className={`chat_messageText ${userId === senderId && "chat_messageTextOwn"} `}>
          <p>{message}</p>
        </div>
      </div>
      <h6>{format(timestamp)}</h6>
    </div>
  );
};

export default Messages;
