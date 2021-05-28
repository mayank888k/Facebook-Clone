import { Avatar } from "@material-ui/core";
import React from "react";
import './messengerChatDetails.css'

const MessengerChatDetails = () => {
  return (
    <div className="messenger_chatDetails">
      <Avatar style={{ height: "110px", width: "110px" }} />
      <div className="chatDetail_name">
        <h3>Name</h3>
      </div>
    </div>
  );
};

export default MessengerChatDetails;
