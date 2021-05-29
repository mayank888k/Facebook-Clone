import { Avatar } from '@material-ui/core'
import React from 'react'
import "./conversation.css"

const Conversation = ({ConversationId, recieverName}) => {
  localStorage.setItem('recieverName',recieverName)
    return (
        <div className="chats">
          <div className="chat">
            <Avatar style={{height:"50px", width:"50px"}} />
            <div className="chatDetails">
              <h3>{recieverName}</h3>
              <p>Last Message</p>
            </div>
          </div>
          </div>
    )
}

export default Conversation
