import React from 'react';

import {useAppReducer} from "../../hooks";
import {dogActions} from "../../reducers";

const Dog = ({dog}) => {
    const [, dispatch] = useAppReducer(value => value.dogReducer)
    const {id, name, color} = dog

        return (
            <div>
                <div>
                    <p>
                        ID: {id}
                    </p>
                </div>
                <div>
                    <h4>
                        Dog name: {name}
                    </h4>
                </div>
                <div>
                    <h5>
                        Dog color: {color}
                    </h5>
                </div>
                <button onClick={() => dispatch(dogActions.DELETE_BY_ID(id))}>Delete</button>
            </div>
        );
};

export {Dog};