import React from 'react';

import css from './Albums.module.css'

const Album = ({albums}) => {
    const {id, title} = albums

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

                </div>
            </div>
        );
};

export {Album};