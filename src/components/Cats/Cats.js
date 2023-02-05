import React from 'react';
import {useAppReducer} from "../../hooks";
import {Cat} from "./Cat";

const Cats = () => {
    const [cats, dispatch] = useAppReducer((reducers) => reducers.catReducer);
        return (
            <div>
                {cats.map(item => <Cat key={item.id} cat={item}/>)}
            </div>
        );
};

export {Cats};