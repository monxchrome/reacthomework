import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";
import css from './styles/users.module.css'

const User = ({users}) => {
    const {id, name, username, email} = users

    const dispatch = useDispatch();

        return (
            <div>
                <div>
                    <div className={css.margin}>
                        <h5 className={css.text}>ID: {id}</h5>
                    </div>
                    <div>
                        <h4 className={css.text}>Name: {name}</h4>
                    </div>
                    <div>
                        <h3 className={css.text}>Username: {username}</h3>
                    </div>
                    <div>
                        <h5 className={css.text}>Email: {email}</h5>
                    </div>
                    <div>
                        <button onClick={() => {dispatch(userActions.setSelectedUser(users))}}>select user</button>
                    </div>
                </div>
            </div>
        );
};

export {User};