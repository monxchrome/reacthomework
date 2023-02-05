import React from 'react';
import {useForm} from "react-hook-form";
import {useAppReducer} from "../../hooks";
import {catActions} from "../../reducers";

const CatForm = () => {
    const {register, reset, handleSubmit} = useForm()

    const [, dispatch] = useAppReducer(value => value.catReducer)

    const save = (cat) => {
        dispatch(catActions.ADD(cat))
        reset()
    }

        return (
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'id'} {...register('id')}/>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'color'} {...register('color')}/>
                <button>save</button>
            </form>
        );
};

export {CatForm};