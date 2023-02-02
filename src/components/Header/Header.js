import React from 'react';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {

    const img = 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png'

        return (
            <div>
                <div className={css.Header}>
                    <div className={css.Logo}>
                        <NavLink to={"/"}>
                            <img src={img} className={css.Logo} alt='img'/>
                        </NavLink>
                    </div>

                    <div className={css.Todos}>
                        <NavLink className={css.Text} to={"/todos"}>TODOS</NavLink>
                    </div>

                    <div className={css.Albums}>
                        <NavLink className={css.Text} to={"/albums"}>ALBUMS</NavLink>
                    </div>

                    <div className={css.Comments}>
                        <NavLink className={css.Text} to={"/comments"}>COMMENTS</NavLink>
                    </div>

                </div>
            </div>
        );
};

export {Header};