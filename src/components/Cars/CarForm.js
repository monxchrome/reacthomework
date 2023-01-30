import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";
import {carService} from "../../services";

const CarForm = ({setCar, updateCar }) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all', resolver: joiResolver(carValidator)});

    const submit = async (car) => {
        const {data} = await carService.create(car)
        setCar(prev => [...prev, data])
        reset()
    }

    const update = async (car) => {
        const {data} = await carService.updateById(updateCar.id, car)
        if (Object.keys(data).length) {
            const {data} = await carService.getAll()
            setCar(data)
        }
    }

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    }, [updateCar])

        return (
            <form onSubmit={handleSubmit(updateCar? update : submit)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="number" placeholder={'price'} {...register('price')}/>
                <input type="number" placeholder={'year'} {...register('year')}/>
                {errors.brand && <div>{errors.brand.message}</div>}
                {errors.price && <div>{errors.price.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}
                <button disabled={!isValid}>{updateCar? 'Update' : 'Create'}</button>
            </form>
        );
};

export {CarForm};