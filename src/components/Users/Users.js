import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {User} from "./User";

const Users = ({user, setUpdateUser}) => {

        return (
            <div>
                {user.map(user => <User key={user.id} user={user} setUpdateUser={setUpdateUser}/>)}
            </div>
        );
};

export {Users};