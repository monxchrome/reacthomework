import {createContext, useState} from "react";
import React from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const logIn = (loginUser) => {
        setUser(loginUser)
    }

    const logOut = () => {
        setUser(null)
    }

    const value = {user, logIn, logOut}

        return (
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        );
};

export {AuthProvider};