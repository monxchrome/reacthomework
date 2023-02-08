import React from 'react';
import {useSelector} from "react-redux";
import css from '../Users/styles/users.module.css'

const Header = () => {
    const {selectedUser} = useSelector(state => state.users);
        return (
            <div>
                <h1 className={css.text}>{selectedUser && selectedUser.username}</h1>
            </div>
        );
};

export {Header};