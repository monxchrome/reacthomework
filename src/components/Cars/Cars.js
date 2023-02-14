import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {Car} from "./Car";
import {useSearchParams} from "react-router-dom";
import css from './styles/cars.module.css'

const Cars = () => {
    const {cars, prev, next} = useSelector(state => state.cars)
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        dispatch(carActions.getAll({page: query.get('page')}))
    }, [dispatch, query])

        return (
            <div>
                <div className={css.Father}>
                    <button className={css.button85} role="button" disabled={!prev} onClick={() => setQuery(query => ({page: +query.get('page')-1}))}>Prev</button>
                    <button className={css.button85} role="button" disabled={!next} onClick={() => setQuery(query => ({page: +query.get('page')+1}))}>Next</button>
                </div>
                {cars.map(item => <Car key={item.id} cars={item}/>)}
            </div>
        );
};

export {Cars};