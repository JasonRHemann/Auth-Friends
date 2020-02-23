import React from 'react'
import FriendsList from './FriendsList'

const Friend = props => {
    return(
        <div>
            <h2>{props.friend.name}</h2>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}

export default Friend