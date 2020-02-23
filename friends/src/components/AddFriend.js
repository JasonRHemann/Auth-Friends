import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWtihAuth'

const AddFriend = () => {
    const [friendData, setFriendData] = useState({name: "", age: "", email: ""})

    const handleChange = e => {
        setFriendData(
            {
                ...friendData,
                [e.target.name]: e.target.value
            }
        )
    };

    const onSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post("/friends", friendData)
        .then(res => {
            setFriendData(
                {
                    ...friendData,
                    name: "",
                    age: "", 
                    email: ""
                }
            )
        })
    };

    return(
        <form onSumbit={onSubmit}>
            <input
            type="text"
            name="name"
            value={friendData.name}
            onChange={handleChange}
            />
            <input
            type="text"
            name="age"
            value={friendData.age}
            onChange={handleChange}
            />
            <input
            type="text"
            name="email"
            value={friendData.email}
            onChange={handleChange}
            />
            <button type="submit">Add Friend</button>
            </form>

    )

}

export default AddFriend