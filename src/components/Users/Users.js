import React, {useEffect, useState} from 'react';
import {userService} from "../../api/userService";
import {User} from "./User";

const Users = ({setUserId}) => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        userService.getAll
            .then(value => value.data)
            .then(value => setUser([...value]))
    }, [])

        return (
            <div>
                {user.map(item => <User key={item.id} user={item} setUserId={setUserId}/>)}
            </div>
        );
};

export {Users};