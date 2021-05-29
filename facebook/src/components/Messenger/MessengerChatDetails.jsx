import { Avatar } from "@material-ui/core";
import React from "react";
import './messengerChatDetails.css'

const MessengerChatDetails = () => {
  const user = JSON.parse(localStorage.getItem('profile'))?.result
  return (
    <div className="messenger_chatDetails">
      <Avatar src={user?.imageUrl} style={{ height: "110px", width: "110px" }} />
      <div className="chatDetail_name">
        <h3>{user?.name}</h3>
      </div>

      <div className="infoDiv">
        Customize Chat
      </div>
      <div className="infoDiv">
        User Support
      </div>
    </div>
  );
};

export default MessengerChatDetails;
