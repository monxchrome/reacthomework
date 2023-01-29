import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import Joi from "joi";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators";
import {userService} from "../../services";

const UserForm = ({setUser, updateUser }) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all', resolver: joiResolver(userValidator)});

    const submit = async (user) => {
        const {data} = await userService.create(user)
        setUser(prev => [...prev, data])
        reset()
    }

    const update = async (user) => {
        const {data} = await userService.updateById(user.id, user)
        if (Object.keys(data).length) {
            const {data} = await userService.getAll()
            setUser(data)
        }
    }

    useEffect(() => {
        if (updateUser) {
            setValue('username', updateUser.username)
            setValue('name', updateUser.name)
            setValue('email', updateUser.email)
        }
    }, [updateUser])

        return (
            <form onSubmit={handleSubmit(updateUser? update : submit)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                {errors.username && <div>{errors.username.message}</div>}
                {errors.name && <div>{errors.name.message}</div>}
                {errors.email && <div>{errors.email.message}</div>}
                <button disabled={!isValid}>{updateUser? 'Update' : 'Create'}</button>
            </form>
        );
};

export {UserForm};