import { Avatar } from '@material-ui/core'
import React from 'react'
import './sidebaarRow.css'

const SidebaarRow = ({title, src, Icon}) => {
    return (
        <div className="sidebaar__row">
            {Icon && <Icon htmlColor="#2e81f4" />}
            {src && <Avatar src={src} />}
            <h5>{title}</h5>
        </div>
    )
}

export default SidebaarRow
