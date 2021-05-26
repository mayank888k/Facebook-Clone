import { Avatar } from '@material-ui/core'
import React from 'react'
import './story.css'

const Story = ({imgUrl, title, storyUrl}) => {
    return (
        <div>
            <div style={{backgroundImage:`url(${storyUrl})`}} className="story">
                <Avatar className="avatar" src={imgUrl} />
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default Story
