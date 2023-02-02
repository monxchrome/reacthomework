import React from 'react';

import {Todos} from "../../components";
import {Button} from "../../components/Button/Button";

const TodosPage = () => {
        return (
            <div>
                <Todos/>
                <Button click={() => {
                    console.log('clicked))))');
                }}>click</Button>
            </div>
        );
};

export {TodosPage};