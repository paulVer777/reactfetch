import React from 'react'
import moment from "moment/moment";
import MenuItem from 'material-ui/MenuItem';

const Message = ({message}) => (
    <div>
        <MenuItem
            primaryText={`${message.user}:(${(moment(message.timestamp).format('h:mm:ss'))})${message.message}`}
        />
    </div>
)

export default Message