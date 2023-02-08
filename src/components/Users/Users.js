import React, {useEffect} from 'react';
import {userService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../redux";
import {User} from "./User";
import {E404} from "../Errors/E404";
import {Loading} from "../Loading/Loading";
import {wait} from "@testing-library/user-event/dist/utils";

const Users = () => {
    const dispatch = useDispatch();

    const {users, errors, loading} = useSelector(state => state.users)

    useEffect(() => {
        dispatch(userActions.getAll())
    }, [])

        return (
            <div>
                {errors && <E404/>}
                {loading && <Loading/>}
                {users.map(item => <User key={item.id} users={item}/>)}
            </div>
        );
};

export {Users};