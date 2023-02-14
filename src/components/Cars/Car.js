import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({cars}) => {
    const {id, brand, price, year} = cars;
    const dispatch = useDispatch()
        return (
            <div>
                <div>
                    <div>
                        <p>ID: {id}</p>
                    </div>
                    <div>
                        <h1>Brand: {brand}</h1>
                    </div>
                    <div>
                        <h2>Price: {price}</h2>
                    </div>
                    <div>
                        <h5>Year: {year}</h5>
                    </div>
                </div>
                <button onClick={() => dispatch(carActions.setCarForUpdate(cars))}>update</button>
                <button onClick={() => dispatch(carActions.deleteById({id}))}>delete</button>
            </div>
        );
};

export {Car};