import React, {createContext, useReducer} from 'react';
import {catRed, dogRed, init} from "../reducers";

const StateContext = createContext(null)

const StateProvider = ({children}) => {
    const reducers = {
        catReducer:useReducer(catRed, null, init),
        dogReducer:useReducer(dogRed, null, init)
    }
        return (
            <StateContext.Provider value={reducers}>
                {children}
            </StateContext.Provider>
        );
};

export {StateProvider, StateContext};