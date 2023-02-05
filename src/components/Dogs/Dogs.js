import React from 'react';
import {useAppReducer} from "../../hooks";
import {Dog} from "./Dog";

const Dogs = () => {
    const [dogs, dispatch] = useAppReducer((reducers) => reducers.dogReducer);
        return (
            <div>
                {dogs.map(item => <Dog key={item.id} dog={item}/>)}
            </div>
        );
};

export {Dogs};