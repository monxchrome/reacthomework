import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {commentValidator} from "../../validators";
import {commentService} from "../../services";

const CommentForm = ({setComment}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: 'all', resolver: joiResolver(commentValidator)})

    const submit = async (comment) => {
        const {data} = await commentService.create(comment)
        setComment(prev => [...prev, data])
        reset()
    }

        return (
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' placeholder={'name'} {...register('name')}/>
                <input type='text' placeholder={'body'} {...register('body')}/>
                <button disabled={!isValid}>Save</button>
                {errors.name && <div>{errors.name.message}</div>}
                {errors.body && <div>{errors.body.message}</div>}
            </form>
        );
};

export {CommentForm};