import React from 'react';
import css from './styles/Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
        return (
            <div className={css.Header}>
                <div className={css.Father}>
                    <Link to={'/login'} className={css.Login}>Login</Link>
                    <Link to={'/register'} className={css.Register}>Register</Link>
                </div>
            </div>
        );
};

export {Header};