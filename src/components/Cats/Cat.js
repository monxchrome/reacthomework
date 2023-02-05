import React from 'react';

import {useAppReducer} from "../../hooks";
import {catActions} from "../../reducers";

const Cat = ({cat}) => {
    const [, dispatch] = useAppReducer(value => value.catReducer)
    const {id, name, color} = cat

        return (
            <div>
                <div>
                    <p>
                        ID: {id}
                    </p>
                </div>
                <div>
                    <h4>
                        Cat name: {name}
                    </h4>
                </div>
                <div>
                    <h5>
                        Cat color: {color}
                    </h5>
                </div>
                <button onClick={() => dispatch(catActions.DELETE_BY_ID(id))}>Delete</button>
            </div>
        );
};

export {Cat};