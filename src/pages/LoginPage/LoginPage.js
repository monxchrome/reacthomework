import React, {useRef} from 'react';
import css from './login.module.css'
import {useAuthContext} from "../../hooks/useAuthContext";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const username = useRef();
    const password = useRef();
    const {logIn} = useAuthContext();
    const navigate = useNavigate();
    const {state} = useLocation()

    const login = () => {
        logIn(username.current.value, password.current.value)
        navigate(state.pathname, {replace: true});
    }

        return (
            <div>
                <div className={css.background}>
                    <div className={css.shape}></div>
                    <div className={css.shape}></div>
                </div>
                <form>
                    <h3>Login Here</h3>

                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder={"username"} ref={username}></input>

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder={"password"} ref={password}></input>

                            <button onClick={() => login()}>Log In</button>
                </form>
            </div>
        );
};

export {LoginPage};