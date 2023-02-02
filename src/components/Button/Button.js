import React from 'react';
import css from './button.module.css'

const Button = ({children, click, ...props}) => {
        return (
            <div className={css.But} onClick={click} {...props}>
                {children}
            </div>
        );
};

export {Button};