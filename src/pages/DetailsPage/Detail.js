import React, {useContext} from 'react';
import {MyContext} from "../../index";

const Detail = () => {

    const context = useContext(MyContext);
    context.gender = 'male';
    Object.assign(context, {status: true})
    delete context.name

        return (
            <div>

            </div>
        );
};

export {Detail};