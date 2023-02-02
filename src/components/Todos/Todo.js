import React from 'react';

import css from './Todos.module.css'

const Todo = ({todos}) => {
    const {id, title, completed} = todos

        return (
            <div>
                <div className={css.Father}>
                    <div className={css.IdDiv}>
                        <h4 className={css.Id}>
                            {id}
                        </h4>
                    </div>

                    <div className={css.TitleDiv}>
                        <h4 className={css.Title}>
                            {title}
                        </h4>
                    </div>

                    <div className={css.CompDiv}>
                        <h4 className={css.Comp}>
                            {completed.toString()}
                        </h4>
                    </div>

                </div>
            </div>
        );
};

export {Todo};