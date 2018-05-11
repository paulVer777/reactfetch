import React from 'react'
import moment from "moment/moment";
import MenuItem from 'material-ui/MenuItem';

const Message = ({message}) => (

        <MenuItem
            primaryText={`${message.user}:(${(moment(message.timestamp).format('h:mm:ss'))})${message.message}`}
        />
)

export default Message