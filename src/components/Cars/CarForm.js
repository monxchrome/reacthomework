import React, {useEffect} from 'react';
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";
import {carValidator} from "../../validators";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

const CarForm = () => {
    const {register, reset, setValue, handleSubmit} = useForm({mode: 'all', resolver: joiResolver(carValidator)})
    const dispatch = useDispatch()
    const {carsForUpdate} = useSelector(state => state.cars)

    useEffect(() => {
        if (carsForUpdate) {
            setValue('brand', carsForUpdate.brand)
            setValue('price', carsForUpdate.price)
            setValue('year', carsForUpdate.year)
        }
    }, [carsForUpdate])

    const save = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
    }

    const update = async (car) => {
        await dispatch(carActions.update({id:carsForUpdate.id, car}))
        reset()
    }

        return (
            <form onSubmit={handleSubmit(carsForUpdate?update:save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button>{carsForUpdate?'update':'create'}</button>
            </form>
        );
};

export {CarForm};