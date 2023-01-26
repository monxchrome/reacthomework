import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {userValidator} from "../../validators";
import {usersService} from "../../service";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all', resolver:joiResolver(userValidator)})

    const submit = async (user) => {
        const {data} = await usersService.create(user)
        setUsers(prev=>[...prev, data])
        reset()
    }

        return (
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' placeholder={'name'} {...register('name')}/>
                <input type='text' placeholder={'username'} {...register('username')}/>
                <input type='text' placeholder={'email'} {...register('email')}/>

                <button disabled={!isValid}>Save</button>

                {errors.name && <div>{errors.name.message}</div>}
                {errors.username && <div>{errors.username.message}</div>}
                {errors.email && <div>{errors.email.message}</div>}
            </form>
        );
};

export {UserForm};