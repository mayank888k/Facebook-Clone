import React from 'react'
import "./messenger.css"
import MessengerBody from './MessengerBody';
import MessengerChatDetails from './MessengerChatDetails';

import MessengerChats from './MessengerChats';

const Messenger = () => {
    return (
        <div className="messenger">
            <MessengerChats />
            <MessengerBody />
            <MessengerChatDetails />
        </div>
    )
}

export default Messenger
