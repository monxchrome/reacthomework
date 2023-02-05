import React from 'react';
import {useForm} from "react-hook-form";

import {useAppReducer} from "../../hooks";
import {dogActions} from "../../reducers";

const DogForm = () => {
    const {register, reset, handleSubmit} = useForm()

    const [, dispatch] = useAppReducer(value => value.dogReducer)

    const save = (dog) => {
        dispatch(dogActions.ADD(dog))
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

export {DogForm};