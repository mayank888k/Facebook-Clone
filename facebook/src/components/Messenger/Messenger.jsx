import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import "./messenger.css"
import MessengerBody from './MessengerBody';
import MessengerChatDetails from './MessengerChatDetails';
import axios from '../../axios.js';
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
