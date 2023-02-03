import React from 'react';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useAuthContext} from "../../hooks/useAuthContext";

const Header = () => {

    const {user} = useAuthContext()

    const img = 'https://www.freeiconspng.com/thumbs/apple-logo-icon/apple-icon-4.png'

    const {logOut} = useAuthContext();

        return (
            <div>
                <div className={css.Header}>
                    <div>
                        <NavLink to={"/"} className={css.Logo}>
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

                    {user &&
                        <div className={css.ButtonContainer}>
                            <NavLink to="/login" className={css.Btn} onClick={
                                logOut
                            }><span className={css.TextBTN}>LogOut</span></NavLink>
                        </div>
                    }

                </div>
            </div>
        );
};

export {Header};