import React, {useContext} from 'react';

import css from './users.module.css'
import {MyContext} from "../../index";

const Users = () => {
   const context = useContext(MyContext)
        return (
            <div>
                <div>
                    <h4 className={css.Text}>
                        name: {context.name}
                    </h4>
                </div>
                <div>
                    <h4 className={css.Text}>
                        age: {context.age}
                    </h4>
                </div>
                <div>
                    <h4 className={css.Text}>
                        gender: {context.gender}
                    </h4>
                </div>
            </div>
        );
};

export {Users};