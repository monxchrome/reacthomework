import React, {useState} from 'react';
import css from './styles/login.module.css'
import {useForm} from "react-hook-form";
import {authService} from "../../services";

const LoginPage = () => {
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState()

    const login = async (userCred) => {
        try {
            await authService.login(userCred)
        } catch (e) {
            if (e.response.status === 401 || e.response.status === 400) {
                setError(e.response.data)
            }
        }
    }

        return (
            <div>
                <div className={css.container}>

                    <div className={css.top}></div>
                    <div className={css.bottom}></div>
                    <div className={css.center}>

                        <h2>Please Sign In</h2>
                        <form onSubmit={handleSubmit(login)}>
                            <input type="text" placeholder={"username"} {...register('username')}/>
                            <input type="text" placeholder={"password"} {...register('password')}/>
                            <button className={css.button85} role="button">Login</button>
                        </form>

                        {error?.detail &&
                            <div className={css.error}>
                                <h2 className={css.textError}>{error.detail}</h2>
                            </div>
                        }

                        <h2>&nbsp;</h2>
                    </div>
                </div>
            </div>
        );
};

export {LoginPage};